'use client'; // Wajib ditambahkan untuk menggunakan framer-motion

import { 
  Building2, 
  Briefcase, 
  HardHat, 
  ShoppingCart, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <Building2 className="h-7 w-7 text-[#0c1524]" />,
    title: "Operasional MBG & SPPG",
    desc: "Pengelolaan aset dan fasilitas secara profesional untuk memastikan operasional bisnis berjalan efisien.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <HardHat className="h-7 w-7 text-[#0c1524]" />,
    title: "Kontraktor & Pengadaan",
    desc: "Layanan konstruksi dan pengadaan barang berkualitas tinggi dengan standar ketepatan waktu.",
    // 🔥 INI FOTO YANG DIGANTI 🔥
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Briefcase className="h-7 w-7 text-[#0c1524]" />,
    title: "Jasa Konsultasi Manajemen",
    desc: "Solusi strategis dan pendampingan ahli untuk meningkatkan performa dan sistem manajemen usaha Anda.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <ShoppingCart className="h-7 w-7 text-[#0c1524]" />,
    title: "Trading & Supplier",
    desc: "Distribusi material dan rantai pasok terpercaya untuk memenuhi kebutuhan logistik instansi.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Sparkles className="h-7 w-7 text-[#0c1524]" />,
    title: "Cleaning Service",
    desc: "Layanan kebersihan menyeluruh oleh tenaga profesional untuk lingkungan kerja yang nyaman.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#0c1524]" />,
    title: "Security Service",
    desc: "Penyediaan tenaga keamanan tersertifikasi untuk menjamin keselamatan aset dan personil.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
  }
];

// Pengaturan Animasi Framer Motion
// Tambahkan : Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

// Tambahkan : Variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <section id="layanan" className="py-24 px-6 md:px-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section dengan Animasi Fade Up */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0c1524] mb-4">
            Layanan Utama Kami
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Solusi komprehensif untuk mendukung efisiensi dan pertumbuhan bisnis Anda melalui layanan yang dikelola oleh tenaga ahli profesional.
          </p>
        </motion.div>

        {/* Grid Kartu Layanan (Bungkus Utama Animasi) */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            // Animasi per Kartu
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden hover:-translate-y-2"
            >
              {/* Bagian Gambar (Atas) - Tetap Dipertahankan */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1524]/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Bagian Konten (Bawah) */}
              <div className="p-8 pt-10 flex flex-col flex-grow relative bg-white">
                
                {/* Ikon Melayang (Overlapping) dengan tambahan animasi goyang sedikit saat di-hover */}
                <div className="absolute -top-10 left-8 h-16 w-16 rounded-xl bg-[#facc15] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="font-playfair text-xl font-bold text-[#0c1524] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <Link 
                  href="/layanan" 
                  className="inline-flex items-center text-sm font-semibold text-[#0c1524] group-hover:text-[#eab308] transition-colors mt-auto"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}