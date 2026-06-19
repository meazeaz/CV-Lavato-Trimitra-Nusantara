'use client';

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Paperclip, CheckCircle } from "lucide-react"; // Tambahkan CheckCircle untuk ikon sukses

export default function RfqForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  
  // State baru untuk mengontrol kemunculan Modal
  const [showModal, setShowModal] = useState(false); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData();
    
    formData.append("nama", (form.elements.namedItem("nama") as HTMLInputElement).value);
    formData.append("perusahaan", (form.elements.namedItem("perusahaan") as HTMLInputElement).value);
    formData.append("whatsapp", (form.elements.namedItem("whatsapp") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("layanan", (form.elements.namedItem("layanan") as HTMLSelectElement).value);
    formData.append("deskripsi", (form.elements.namedItem("deskripsi") as HTMLTextAreaElement).value);
    formData.append("budget", (form.elements.namedItem("budget") as HTMLInputElement).value);
    formData.append("deadline", (form.elements.namedItem("deadline") as HTMLInputElement).value);

    const fileInput = form.elements.namedItem("lampiran") as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append("lampiran", fileInput.files[0]);
    }

    try {
      const response = await fetch('/api/zoho-integration', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFileName(null);
        form.reset();
        
        // Munculkan modal sukses di tengah layar
        setShowModal(true); 
      } else {
        throw new Error("Gagal mengirim data");
      }
    } catch (error) {
      toast.error("Terjadi Kesalahan", {
        description: "Mohon maaf, sistem kami sedang sibuk. Silakan coba lagi via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Membungkus form dan modal dalam satu div/fragment
    <div className="relative">
      
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 lg:p-12 rounded-[2rem] shadow-sm border border-stone-100 space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nama" className="text-stone-600">Nama Lengkap <span className="text-[#E07A5F]">*</span></Label>
            <Input id="nama" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perusahaan" className="text-stone-600">Instansi / Perusahaan</Label>
            <Input id="perusahaan" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-stone-600">Nomor WhatsApp <span className="text-[#E07A5F]">*</span></Label>
            <Input id="whatsapp" type="tel" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-stone-600">Email Lengkap</Label>
            <Input id="email" type="email" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="layanan" className="text-stone-600">Pilih Layanan Utama <span className="text-[#E07A5F]">*</span></Label>
          <select id="layanan" required className="flex h-11 w-full rounded-md border-none shadow-none bg-[#FCFAF5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E07A5F] text-stone-800">
            <option value="">Pilih layanan...</option>
            <option value="mbg">Operasional MBG & SPPG</option>
            <option value="kontraktor">Kontraktor & Pengadaan</option>
            <option value="konsultasi">Jasa Konsultasi Manajemen</option>
            <option value="trading">Trading & Supplier</option>
            <option value="cleaning">Cleaning Service</option>
            <option value="security">Security Service</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deskripsi" className="text-stone-600">Deskripsi Kebutuhan / Detail Pekerjaan <span className="text-[#E07A5F]">*</span></Label>
          <Textarea id="deskripsi" required className="bg-[#FCFAF5] border-none shadow-none min-h-[120px] p-4 focus-visible:ring-[#E07A5F] resize-none" placeholder="Jelaskan kebutuhan Anda secara detail..." />
        </div>

        {/* Upload File Lampiran */}
        <div className="space-y-2">
          <Label className="text-stone-600 block">Lampirkan Dokumen / Gambar (Opsional)</Label>
          <div className="relative">
            <Input 
              id="lampiran" 
              type="file" 
              className="hidden" 
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" 
            />
            <Label 
              htmlFor="lampiran" 
              className="flex items-center gap-3 bg-[#FCFAF5] hover:bg-[#f3ead8] transition-colors border-dashed border-2 border-stone-200 rounded-md p-4 cursor-pointer text-sm text-stone-500 w-full"
            >
              <div className="bg-white p-2 rounded-full shadow-sm">
                <Paperclip className="h-5 w-5 text-[#E07A5F]" />
              </div>
              <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {fileName ? (
                  <span className="text-stone-800 font-medium">{fileName}</span>
                ) : (
                  <span>Klik untuk unggah (PDF, JPG, PNG, DOCX)</span>
                )}
              </div>
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-stone-600">Estimasi / Target Anggaran</Label>
            <Input id="budget" placeholder="Contoh: Rp 10.000.000" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline" className="text-stone-600">Batas Waktu Target <span className="text-[#E07A5F]">*</span></Label>
            <Input id="deadline" type="date" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-4">
          <Checkbox id="terms" required className="mt-0.5 border-[#E07A5F] data-[state=checked]:bg-[#E07A5F]" />
          <Label htmlFor="terms" className="text-xs text-stone-500 font-normal leading-relaxed cursor-pointer hover:text-stone-700 transition-colors">
            Saya memahami bahwa ini adalah permintaan penawaran. CV Lavato Trimitra Nusantara akan menjaga kerahasiaan data yang diunggah.
          </Label>
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#E07A5F] hover:bg-[#c96a51] text-white px-10 py-6 text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-md">
            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memproses...</> : "Kirim Penawaran →"}
          </Button>
        </div>
      </form>

      {/* --- MODAL SUKSES --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Box Modal dengan animasi */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-md w-full shadow-2xl text-center transform transition-all animate-in fade-in zoom-in duration-300">
            
            {/* Ikon Sukses */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 mb-6 shadow-inner">
              <CheckCircle className="h-10 w-10 text-teal-600" />
            </div>
            
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#4a3b32] mb-3">
              Permintaan Terkirim!
            </h3>
            
            <p className="text-stone-500 text-sm mb-8 leading-relaxed">
              Terima kasih telah mempercayakan kebutuhan Anda. Tim profesional kami akan segera menghubungi Anda melalui Email atau nomor WhatsApp yang telah didaftarkan.
            </p>
            
            {/* Tombol Tutup */}
            <Button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[#E07A5F] hover:bg-[#c96a51] text-white rounded-full py-6 font-medium shadow-md transition-all hover:scale-105"
            >
              Tutup & Kembali
            </Button>
            
          </div>
        </div>
      )}
      {/* -------------------- */}
      
    </div>
  );
}