'use client';

import React from "react";
import Link from "next/link";
// --- 1. Import Komponen Image dari Next.js ---
import Image from "next/image"; 
import { Button } from "@/components/ui/button";

export default function Navbar() {
  // Fungsi untuk menangani klik dan melakukan smooth scroll ke section tujuan
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    
    // Jika target adalah 'beranda' (paling atas)
    if (targetId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Mencari elemen berdasarkan ID (contoh: id="tentang")
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Tambahkan z-index agar navbar selalu di atas konten lain saat di-scroll (opsional jika sticky)
    <nav className="flex items-center justify-between px-6 md:px-20 py-5 bg-[#FCFAF5] sticky top-0 z-50 shadow-sm border-b border-stone-100">
      
      {/* Logo & Nama Brand */}
      <div 
        className="flex items-center gap-4 cursor-pointer group" 
        onClick={(e) => handleScroll(e as any, 'beranda')}
      >
        {/* --- 2. Ganti Bulatan Teks "L" dengan Logo PNG --- */}
        <div className="relative h-12 w-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Image 
            src="/images/Logo.png" // Path file di dalam folder public
            alt="Logo CV Lavato Trimitra Nusantara"
            width={48} // Atur lebar sesuai kebutuhan (h-12 di tailwind = 48px)
            height={48} // Atur tinggi sesuai kebutuhan
            priority // Prioritaskan pemuatan gambar ini karena di atas (fold)
            className="object-contain" // Memastikan gambar tidak terpotong dan rasionya pas
          />
        </div>
        
        <div>
          <h1 className="font-playfair font-bold text-xl leading-tight text-[#4a3b32]">
            CV Lavato Trimitra
          </h1>
          <p className="text-xs text-stone-500 tracking-wider">
            NUSANTARA
          </p>
        </div>
      </div>

      {/* Menu Navigasi Desktop */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
        <a href="#beranda" onClick={(e) => handleScroll(e, 'beranda')} className="hover:text-[#E07A5F] transition-colors">
          Beranda
        </a>
        <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="hover:text-[#E07A5F] transition-colors">
          Tentang Perusahaan
        </a>
        <a href="#layanan" onClick={(e) => handleScroll(e, 'layanan')} className="hover:text-[#E07A5F] transition-colors">
          Layanan
        </a>
        <a href="#rfq" onClick={(e) => handleScroll(e, 'rfq')} className="hover:text-[#E07A5F] transition-colors">
          Konsultasi & RFQ
        </a>
      </div>

      {/* Tombol Ajukan Penawaran (Juga melakukan scroll ke form RFQ) */}
      <Button 
        onClick={(e) => handleScroll(e as any, 'rfq')}
        className="bg-[#E07A5F] hover:bg-[#c96a51] text-white rounded-full px-7 py-5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
      >
        Ajukan Penawaran
      </Button>
    </nav>
  );
}