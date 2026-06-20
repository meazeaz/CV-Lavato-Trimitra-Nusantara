'use client';

import { motion, Variants } from "framer-motion";
import { 
  Building2, 
  HardHat, 
  Briefcase, 
  ShoppingCart, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LayananDetail() {
  const allServices = [
    {
      id: "01",
      icon: <Building2 className="h-6 w-6 text-[#facc15]" />,
      title: "Operasional MBG & SPPG",
      desc: "Pengelolaan aset, manajemen fasilitas gedung, dan dukungan teknis operasional terpadu secara profesional. Kami memastikan kelancaran aktivitas bisnis harian mitra kerja dengan sistem kontrol performa aset yang ketat dan efisien demi keberlanjutan usaha jangka panjang.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "02",
      icon: <HardHat className="h-6 w-6 text-[#facc15]" />,
      title: "Kontraktor & Pengadaan",
      desc: "Layanan konstruksi bangunan umum, renovasi komersial, pengerjaan infrastruktur, dan sistem pengadaan material bangunan berskala besar. Didukung oleh tim ahli teknik sipil berpengalaman untuk memastikan proyek selesai tepat waktu dengan kualitas struktural terbaik.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "03",
      icon: <Briefcase className="h-7 w-7 text-[#facc15]" />,
      title: "Jasa Konsultasi Manajemen",
      desc: "Penyusunan rencana strategis korporasi, audit kepatuhan operasional internal, pendampingan regulasi, serta solusi taktis peningkatan produktivitas tata kelola usaha. Kami membantu memetakan risiko dan mengoptimalkan profitabilitas instansi Anda.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "04",
      icon: <ShoppingCart className="h-6 w-6 text-[#facc15]" />,
      title: "Trading & Supplier",
      desc: "Penyedia rantai pasok logistik umum terpercaya, pengadaan perangkat dan peralatan kantor, hingga distribusi material mentah untuk kebutuhan industri. Kami menjamin keaslian komoditas barang dan ketepatan waktu pengiriman hingga ke lokasi tujuan.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "05",
      icon: <Sparkles className="h-6 w-6 text-[#facc15]" />,
      title: "Cleaning Service",
      desc: "Penyediaan tenaga kebersihan ahli (sanitasi gedung) yang terlatih, jujur, dan dibekali peralatan modern serta chemical ramah lingkungan. Melayani pemeliharaan kebersihan menyeluruh untuk area perkantoran, instansi pendidikan, maupun area komersial.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "06",
      icon: <ShieldCheck className="h-6 w-6 text-[#facc15]" />,
      title: "Security Service",
      desc: "Sistem pengamanan lingkungan kerja terpadu melalui penyediaan personil satuan pengamanan (Satpam) yang tersertifikasi resmi, disiplin tinggi, dan sigap. Kami berkomitmen penuh dalam melindungi aset fisik korporasi dan menjamin keselamatan personil.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const handleScrollToRfq = () => {
    // Jika tombol di seksi bawah diklik, layar akan digulirkan kembali ke Beranda / Form RFQ
    const element = document.getElementById("rfq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#rfq";
    }
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      
      {/* 1. HEADER BANNER UTAMA (NAVY) */}
      <div className="w-full bg-[#0c1524] text-white py-16 px-6 md:px-20 border-b border-[#facc15]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-[#facc15] text-xs font-bold tracking-widest uppercase block mb-1">
              Solusi Terintegrasi
            </span>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold tracking-wide">
              Layanan Utama Perusahaan
            </h2>
          </div>
          <div className="text-sm text-slate-300 max-w-md">
            Komitmen kami adalah memberikan hasil kerja berstandar tinggi yang adaptif untuk kebutuhan sektor swasta maupun pemerintahan di seluruh Indonesia.
          </div>
        </div>
      </div>

      {/* 2. DAFTAR LAYANAN MENGALIR DARI ATAS KE BAWAH (SELANG-SELING) */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 space-y-24 md:space-y-32">
        {allServices.map((service, index) => {
          // Logika menentukan posisi kiri/kanan berdasarkan urutan indeks ganjil/genap
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full group"
            >
              {/* Sisi Gambar (Akan pindah posisi di layar desktop agar variatif) */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`lg:col-span-6 w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group-hover:shadow-2xl transition-all duration-500 bg-slate-100">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-7xl) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-[#0c1524]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Sisi Konten Teks */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
              >
                {/* Penanda Nomor & Kotak Ikon Mewah */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 w-12 rounded-xl bg-[#0c1524] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
                    {service.icon}
                  </div>
                  <span className="font-playfair font-bold text-2xl text-[#facc15] tracking-wider">
                    {service.id}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#0c1524] mb-4 group-hover:text-[#facc15] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
                
                <div className="w-12 h-1 bg-[#0c1524]/10 group-hover:w-24 group-hover:bg-[#facc15] transition-all duration-500 rounded-full" />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* 3. BANNER CTA "BUTUH SOLUSI KAMI?" (WARNA KUNING EMAS PREMIUM) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#facc15] text-[#0c1524] py-16 px-6 md:px-20 text-center relative overflow-hidden shadow-inner border-t border-yellow-400"
      >
        {/* Ornamen Grafis Geometris Belakang */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#0c1524]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-[#0c1524] flex items-center justify-center mb-4 shadow-md">
            <HelpCircle className="h-6 w-6 text-[#facc15]" />
          </div>
          
          <h3 className="font-playfair text-3xl md:text-4xl font-black tracking-wide mb-3">
            Butuh Solusi Kami?
          </h3>
          
          <p className="text-[#0c1524]/90 text-sm md:text-base font-bold max-w-xl mb-8 leading-relaxed">
            Diskusikan kebutuhan pengadaan, manajemen fasilitas, atau rencana konstruksi instansi Anda bersama tim ahli kami. Ajukan penawaran harga terbaik sekarang juga!
          </p>

          <Button 
            onClick={handleScrollToRfq}
            className="group bg-[#0c1524] hover:bg-[#1e293b] text-white font-bold rounded-md px-10 py-7 text-base transition-all shadow-lg hover:scale-105 duration-300 flex items-center gap-2"
          >
            Ajukan Penawaran Sekarang (RFQ)
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>

    </section>
  );
}