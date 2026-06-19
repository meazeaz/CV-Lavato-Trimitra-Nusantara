'use client';

import React from "react";
import Link from "next/link";
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
    <nav className="flex items-center justify-between px-6 md:px-20 py-6 bg-[#FCFAF5]">
      {/* Logo & Nama Brand */}
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={(e) => handleScroll(e as any, 'beranda')}
      >
        <div className="h-10 w-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold font-playfair group-hover:scale-105 transition-transform">
          L
        </div>
        <div>
          <h1 className="font-playfair font-bold text-lg leading-tight text-[#4a3b32]">CV Lavato Trimitra</h1>
          <p className="text-xs text-stone-500">Nusantara</p>
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
        className="bg-[#E07A5F] hover:bg-[#c96a51] text-white rounded-full px-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
      >
        Ajukan Penawaran
      </Button>
    </nav>
  );
}