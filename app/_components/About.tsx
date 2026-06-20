'use client';

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function About() {
  // Poin-poin keunggulan utama perusahaan
  const keyPoints = [
    "Legalitas & Sertifikasi Badan Usaha Lengkap (NIB & NPWP)",
    "Komitmen Mutu & Standardisasi Operasional Tinggi",
    "Manajemen Berpengalaman & Tenaga Kerja Tersertifikasi",
    "Solusi Menyeluruh (One-Stop Solution) untuk Pemerintah & Swasta"
  ];

  // Konfigurasi Animasi List
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="tentang" className="bg-white overflow-hidden w-full">
      
      {/* 1. HEADER BANNER WARNA BIRU TUA (NAVY) */}
      <div className="w-full bg-[#0c1524] text-white py-12 px-6 md:px-20 border-b border-[#facc15]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-[#facc15] text-xs font-bold tracking-widest uppercase block mb-1">
              Profil Korporat
            </span>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold tracking-wide">
              Tentang Perusahaan Kami
            </h2>
          </div>
          <div className="text-sm text-slate-300 max-w-md">
            Mengenal lebih dekat dedikasi, legalitas, dan komitmen pelayanan CV Lavato Trimitra Nusantara.
          </div>
        </div>
      </div>

      {/* 2. KONTEN UTAMA SPLIT GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Kolom Kiri: Deskripsi Teks & Poin Keunggulan */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl md:text-4xl font-bold text-[#0c1524] mb-6 leading-tight">
              Mitra Strategis Terpercaya untuk <br />
              <span className="text-slate-500 font-medium text-xl md:text-2xl block mt-1">
                Pertumbuhan & Efisiensi Bisnis Anda
              </span>
            </h3>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-base">
              <strong>CV LAVATO TRIMITRA NUSANTARA</strong> adalah perusahaan pengadaan terpadu dan penyedia jasa profesional yang berkomitmen tinggi pada kualitas, integritas, dan keberlanjutan. Kami hadir sebagai solusi satu pintu untuk memenuhi kebutuhan operasional instansi pemerintah, sektor swasta, lembaga pendidikan, hingga dunia industri di seluruh Indonesia.
            </p>
          </motion.div>

          {/* List Poin Keunggulan dengan Animasi Stagger */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 mb-10"
          >
            {keyPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start gap-3 group"
              >
                <CheckCircle2 className="h-5 w-5 text-[#facc15] shrink-0 mt-1 transition-transform group-hover:scale-110 duration-300" />
                <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-[#0c1524] transition-colors">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Aksi Tombol Navigasi */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/tentang">
              <Button className="group bg-[#0c1524] hover:bg-[#1e293b] text-white font-semibold rounded-md px-8 py-6 text-base transition-all shadow-md hover:scale-105 duration-300 flex items-center gap-2">
                Selengkapnya Tentang Kami
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Kolom Kanan: Frame Gambar Premium (`mbg.jpg`) - DISETTING AGAR TIDAK TERPOTONG */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-1 lg:order-2 w-full flex justify-center items-center"
        >
          {/* Ornamen Latar Belakang */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#facc15]/10 rounded-full blur-2xl z-0" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0c1524]/5 rounded-full blur-2xl z-0" />

          {/* Bingkai Gambar Utama Berasio Proporsional (Aman dari Potongan Ekstrem) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white z-10 group bg-slate-100">
            <Image 
              src="/images/mbg.jpg" 
              alt="Operasional Makmur Bersama CV Lavato Trimitra Nusantara"
              fill
              sizes="(max-w-7xl) 100vw, 50vw"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Overlay Gradasi Tipis */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1524]/20 via-transparent to-transparent opacity-60" />
          </div>

          {/* Lapisan Tag Melayang Kreatif */}
          <div className="absolute -bottom-6 right-4 sm:right-8 bg-white p-4 md:p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-[#facc15]/15 h-12 w-12 rounded-lg flex items-center justify-center shrink-0">
              <span className="font-playfair text-xl font-black text-[#0c1524]">100%</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0c1524] leading-tight">Profesional</p>
              <p className="text-xs text-slate-500 mt-0.5">Berorientasi Solusi & Hasil</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}