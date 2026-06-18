'use client';

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

export default function RfqForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Permintaan Terkirim!", {
        description: "Tim kami akan menghubungi Anda dalam 1x24 jam.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    // Mengubah background form menjadi putih, dan sudut lebih membulat (rounded-[2rem])
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 lg:p-12 rounded-[2rem] shadow-sm border border-stone-100 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nama" className="text-stone-600">Nama Lengkap <span className="text-[#E07A5F]">*</span></Label>
          <Input id="nama" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="perusahaan" className="text-stone-600">Nama Perusahaan</Label>
          <Input id="perusahaan" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-stone-600">Nomor WhatsApp <span className="text-[#E07A5F]">*</span></Label>
          <Input id="whatsapp" type="tel" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-stone-600">Email</Label>
          <Input id="email" type="email" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="layanan" className="text-stone-600">Layanan yang Dibutuhkan <span className="text-[#E07A5F]">*</span></Label>
        <select id="layanan" required className="flex h-11 w-full rounded-md border-none shadow-none bg-[#FCFAF5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E07A5F] text-stone-800">
          <option value="">Pilih layanan...</option>
          <option value="trading">General Trading</option>
          <option value="supplier">Supplier Material</option>
          <option value="kontraktor">Jasa Kontraktor</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="deskripsi" className="text-stone-600">Deskripsi Barang / Pekerjaan <span className="text-[#E07A5F]">*</span></Label>
        <Textarea id="deskripsi" required className="bg-[#FCFAF5] border-none shadow-none min-h-[120px] p-4 focus-visible:ring-[#E07A5F] resize-none" placeholder="Jelaskan kebutuhan Anda secara detail..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-stone-600">Target Anggaran</Label>
          <Input id="budget" placeholder="Contoh: Rp 10.000.000" className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deadline" className="text-stone-600">Batas Waktu <span className="text-[#E07A5F]">*</span></Label>
          <Input id="deadline" type="date" required className="bg-[#FCFAF5] border-none shadow-none h-11 focus-visible:ring-[#E07A5F]" />
        </div>
      </div>

      <div className="flex items-start space-x-3 pt-4">
        <Checkbox id="terms" required className="mt-0.5 border-[#E07A5F] data-[state=checked]:bg-[#E07A5F]" />
        <Label htmlFor="terms" className="text-xs text-stone-500 font-normal leading-relaxed cursor-pointer hover:text-stone-700 transition-colors">
          Saya memahami bahwa ini adalah permintaan penawaran. Legalitas perusahaan sudah lengkap (CV dengan NPWP).
        </Label>
      </div>

      <div className="pt-2">
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#E07A5F] hover:bg-[#c96a51] text-white px-10 py-6 text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-md">
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memproses...</> : "Kirim Permintaan →"}
        </Button>
      </div>
    </form>
  );
}