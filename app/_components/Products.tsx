"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
  // Referensi untuk kontainer slider agar bisa dikontrol oleh tombol
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk menggeser kontainer ke kiri atau kanan
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Menentukan seberapa jauh geseran per klik (Lebar kartu + gap)
      const scrollAmount = direction === "left" ? -344 : 344; 
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const products = [
    {
      badge: "Program Nasional",
      title: "Operasional MBG & SPPG",
      desc: "Dukungan implementasi Program Makan Bergizi Gratis melalui pengelolaan dapur umum tersertifikasi, penyediaan menu higienis, dan manajemen logistik sentra pangan.",
      highlight: "Layanan Terintegrasi",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Konstruksi & Supply",
      title: "Kontraktor & Pengadaan",
      desc: "Pelaksanaan pengadaan barang dan jasa pemerintah maupun swasta, pemenuhan kebutuhan operasional kantor, serta perlengkapan dapur dan distribusi skala besar.",
      highlight: "Profesional & Tepat Waktu",
      img: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Business Advisor",
      title: "Jasa Konsultasi Manajemen",
      desc: "Pendampingan administrasi usaha, manajemen proyek (PMO), studi kelayakan (Feasibility Study), serta penasihat teknis dan audit untuk optimalisasi bisnis.",
      highlight: "Solusi Strategis",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Trading & Logistics",
      title: "Trading & Supplier",
      desc: "Distribusi material konstruksi, suplai Alat Tulis Kantor (ATK), penyediaan peralatan industri, serta pengelolaan manajemen logistik dan pergudangan terpadu.",
      highlight: "Rantai Pasok Kuat",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Facility Management",
      title: "Cleaning Service Terlatih",
      desc: "Layanan kebersihan umum gedung & perkantoran, perawatan fasad kaca gedung bertingkat, deep cleaning pasca konstruksi, dan penyediaan tenaga kebersihan.",
      highlight: "Higienis & Konsisten",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Security Management",
      title: "Security Service Profesional",
      desc: "Penyediaan tenaga keamanan profesional untuk penjagaan area perkantoran atau pabrik, pengawalan VVIP (Bodyguard), serta manajemen keamanan event.",
      highlight: "Perlindungan Maksimal",
      img: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-[#FCFAF5] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section (Bersih tanpa tombol panah di atas) */}
        <div className="mb-10">
          <p className="text-teal-600 text-xs font-bold tracking-widest mb-2 uppercase">SOLUSI & OPERASIONAL</p>
          <h2 className="font-playfair text-4xl font-bold text-[#4a3b32] mb-3">6 Pilar Layanan Utama</h2>
          <p className="text-stone-500 text-sm">Arahkan kursor ke area layanan atau geser untuk melihat kapabilitas operasional kami.</p>
        </div>
        
        {/* Kontainer Utama Slider dengan Deteksi Hover (`group/slider`) */}
        <div className="relative group/slider">
          
          {/* Tombol Panah Kiri (Muncul absolut di ujung kiri tengah) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#4a3b32] hover:text-[#D46B4A] border border-[#e8d5c4] rounded-full h-12 w-12 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex focus:outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Tombol Panah Kanan (Muncul absolut di ujung kanan tengah) */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#4a3b32] hover:text-[#D46B4A] border border-[#e8d5c4] rounded-full h-12 w-12 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex focus:outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Kontainer Slider Horizontal */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none mask-linear-gradient"
          >
            {products.map((item, i) => (
              <Card 
                key={i} 
                className="w-[290px] sm:w-[320px] shrink-0 border-none shadow-sm overflow-hidden bg-white hover:shadow-md transition-all group snap-start"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                  />
                  <Badge className="absolute top-3 left-3 bg-white text-stone-800 hover:bg-white border-none shadow-sm text-xs font-semibold">
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-5 flex flex-col h-[280px]">
                  <h3 className="font-playfair text-lg font-bold text-[#4a3b32] mb-2 min-h-[56px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 flex-grow leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                  <p className="font-playfair font-bold text-[#E07A5F] text-xs mb-4">{item.highlight}</p>
                  <Button className="w-full bg-[#F3E5D8] text-[#D46B4A] hover:bg-[#e8d5c4] rounded-full font-semibold text-sm transition-colors mt-auto">
                    Konsultasikan Kebutuhan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}