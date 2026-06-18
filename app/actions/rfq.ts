'use server';

// Ini adalah Server Action: Kode ini HANYA berjalan di Server (Node.js)
// Sangat aman untuk menaruh token API Zoho di sini.

export async function submitRfq(prevState: any, formData: FormData) {
  // 1. Ekstrak data dari form
  const itemName = formData.get("itemName") as string;
  const quantity = formData.get("quantity") as string;
  const budget = formData.get("budget") as string;
  const notes = formData.get("notes") as string;

  // 2. Validasi dasar
  if (!itemName || !quantity) {
    return { success: false, message: "Nama barang dan Kuantitas wajib diisi!" };
  }

  try {
    // 3. DI SINI TEMPAT INTEGRASI ZOHO API NANTINYA
    // const zohoToken = process.env.ZOHO_CLIENT_SECRET;
    // await fetch('https://books.zoho.com/api/v3/...', { ... })
    
    // Simulasi delay jaringan agar terlihat UX loading-nya
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 4. Return respon sukses ke Client
    return { success: true, message: `RFQ untuk ${itemName} berhasil dikirim!` };
  } catch (error) {
    return { success: false, message: "Terjadi kesalahan sistem." };
  }
}