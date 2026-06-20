'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Products() {
  // Data Proyek & Rekam Jejak Portofolio Perusahaan
  const allProjects = [
    {
      title: "Pengerjaan Konstruksi & Renovasi Gedung",
      category: "Kontraktor & Pengadaan",
      location: "Bogor, Jawa Barat",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Pengadaan Logistik & Material Umum Instansi",
      category: "Trading & Supplier",
      location: "Jakarta Pusat, DKI Jakarta",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Manajemen Fasilitas & Aset Operasional MBG",
      category: "Operasional MBG & SPPG",
      location: "Bekasi, Jawa Barat",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Optimasi & Audit Sistem Manajemen Usaha",
      category: "Jasa Konsultasi Manajemen",
      location: "Tangerang, Banten",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Pemeliharaan Sanitasi & Kebersihan Kompleks Komersial",
      category: "Cleaning Service",
      location: "Bogor, Jawa Barat",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sistem Pengamanan Terpadu Area Perindustrian",
      category: "Security Service",
      location: "Karawang, Jawa Barat",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-white w-full overflow-hidden">
      
      {/* 1. HEADER BANNER UTAMA SINKRON (NAVY) */}
      <div className="w-full bg-[#0c1524] text-white py-16 px-6 md:px-20 border-b border-[#facc15]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-[#facc15] text-xs font-bold tracking-widest uppercase block mb-1">
              Rekam Jejak Kerja
            </span>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold tracking-wide">
              Proyek & Portofolio
            </h2>
          </div>
          <div className="text-sm text-slate-300 max-w-md">
            Daftar pengerjaan proyek dan dedikasi pengadaan terpadu yang telah berhasil diselesaikan oleh CV Lavato Trimitra Nusantara dengan standar mutu terbaik.
          </div>
        </div>
      </div>

      {/* 2. KONTEN GRID GALERI PROYEK */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        
        {/* Pembungkus Grid dengan Animasi Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden hover:-translate-y-2"
            >
              {/* Wadah Gambar Proyek */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Badge Kategori Melayang di Atas Gambar */}
                <div className="absolute top-4 left-4 bg-[#0c1524] text-[#facc15] text-xs font-bold px-3 py-1.5 rounded-md shadow-md border border-[#facc15]/20">
                  {project.category}
                </div>
              </div>

              {/* Konten Detail Proyek */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="font-playfair text-xl font-bold text-[#0c1524] mb-4 group-hover:text-[#facc15] transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Meta Info (Lokasi & Status) */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}