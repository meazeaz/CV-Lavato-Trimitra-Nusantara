import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Minta Access Token baru ke Zoho menggunakan Refresh Token
    const tokenUrl = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;
    
    const tokenResponse = await fetch(tokenUrl, { method: 'POST' });
    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      throw new Error("Gagal mendapatkan Access Token dari Zoho");
    }
    
    const accessToken = tokenData.access_token;

    // 2. Tangkap data yang dikirim dari form website
    const formData = await request.formData();
    const nama = formData.get('nama') as string;
    const perusahaan = formData.get('perusahaan') as string || "Personal / Tidak Disebutkan";
    const whatsapp = formData.get('whatsapp') as string;
    const email = formData.get('email') as string;
    const layanan = formData.get('layanan') as string;
    const deskripsi = formData.get('deskripsi') as string;
    const budget = formData.get('budget') as string;
    const deadline = formData.get('deadline') as string;
    const file = formData.get('lampiran') as File | null;

    // 3. Susun data untuk dimasukkan ke modul "Leads" (Prospek) Zoho CRM
    const leadData = {
      data: [
        {
          Last_Name: nama, // Zoho mewajibkan field Last_Name
          Company: perusahaan, // Zoho mewajibkan field Company
          Phone: whatsapp,
          Email: email,
          Description: `Layanan Utama: ${layanan}\nTarget Anggaran: ${budget}\nBatas Waktu: ${deadline}\n\nDetail Kebutuhan:\n${deskripsi}`,
          Lead_Source: "Website Form"
        }
      ],
      trigger: ["workflow"]
    };

    // 4. Kirim data teks ke Zoho CRM
    const leadResponse = await fetch("https://www.zohoapis.com/crm/v3/Leads", {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    });

    const leadResult = await leadResponse.json();
    
    // Cek apakah Lead berhasil dibuat
    if (!leadResult.data || leadResult.data[0].code !== "SUCCESS") {
      console.error("Zoho Error:", leadResult);
      throw new Error("Gagal membuat Lead di Zoho");
    }

    const leadId = leadResult.data[0].details.id; // Ambil ID klien yang baru dibuat

  // 5. Jika klien mengunggah file, kirim file tersebut sebagai Attachment ke Lead ID tadi
    if (file && file.size > 0 && leadId) {
      console.log(`Mencoba mengunggah file: ${file.name} (Ukuran: ${file.size} bytes) ke Lead ID: ${leadId}`);
      
      try {
        const attachmentFormData = new FormData();
        // Memastikan file di-append dengan benar di lingkungan server Next.js
        attachmentFormData.append('file', file, file.name);

        const attachResponse = await fetch(`https://www.zohoapis.com/crm/v3/Leads/${leadId}/Attachments`, {
          method: 'POST',
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`
            // Catatan: Jangan set Content-Type, biarkan fetch yang menentukan boundary multipart-nya
          },
          body: attachmentFormData,
          // Tambahkan opsi duplex untuk Node.js versi terbaru (Next.js 13/14+)
          // @ts-ignore
          duplex: 'half' 
        });

        const attachResult = await attachResponse.json();
        
        if (attachResult.data && attachResult.data[0].code === "SUCCESS") {
          console.log("✅ Lampiran BERHASIL diunggah ke Zoho!");
        } else {
          console.error("❌ Gagal mengunggah lampiran ke Zoho:", attachResult);
        }
      } catch (attachErr) {
        console.error("❌ Terjadi error pada sistem saat mengirim lampiran:", attachErr);
      }
    } else {
      console.log("ℹ️ Tidak ada file lampiran yang dikirim oleh klien.");
    }

    return NextResponse.json({ success: true, message: "Berhasil terkirim ke Zoho" });
  } catch (error) {
    console.error("❌ Terjadi error pada sistem:", error);
    return NextResponse.json({ success: false, message: "Terjadi kesalahan pada sistem. Silakan coba lagi." }, { status: 500 });
  }
}