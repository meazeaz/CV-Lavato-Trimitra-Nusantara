import React from "react";

// Data Konstan untuk Layanan (Diperbarui sesuai Profil Perusahaan)
const SERVICES_DATA = [
  { 
    icon: "🏗️", 
    title: "Kontraktor & Pengadaan", 
    desc: "Melayani pengadaan barang dan jasa, kebutuhan operasional kantor, hingga perlengkapan dapur dan distribusi." // [cite: 56, 57, 58, 59]
  },
  { 
    icon: "💼", 
    title: "Jasa Konsultasi", 
    desc: "Memberikan pendampingan administrasi usaha, konsultasi manajemen bisnis, manajemen proyek (PMO), audit, dan studi kelayakan." // [cite: 60, 61, 62, 63, 64, 65]
  },
  { 
    icon: "📦", 
    title: "Trading & Supplier", 
    desc: "Distribusi material konstruksi, suplai alat tulis kantor (ATK), penyediaan peralatan industri, serta layanan logistik dan pergudangan." // [cite: 66, 67, 68, 69, 70]
  },
  { 
    icon: "✨", 
    title: "Cleaning Service", 
    desc: "Layanan kebersihan gedung & perkantoran, perawatan fasad kaca, deep cleaning pasca konstruksi, dan penyediaan tenaga kebersihan terlatih." // [cite: 71, 72, 73, 74, 75]
  },
  { 
    icon: "🛡️", 
    title: "Security Service", 
    desc: "Penyediaan tenaga keamanan profesional untuk penjagaan area, pengawalan VVIP (Bodyguard), manajemen keamanan event, dan konsultasi sistem." // [cite: 76, 77, 78, 79, 80, 81]
  },
  { 
    icon: "🍲", 
    title: "Program Pemerintah", 
    desc: "Dukungan operasional untuk Program MBG & SPPG, termasuk tenaga dapur, manajemen distribusi, pengadaan bahan baku, dan dapur umum." // [cite: 82, 83, 84, 85, 86]
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 sm:py-28 bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Tambahkan Kelas pada Header Section */}
        <div className="max-w-2xl reveal-on-scroll">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Layanan Kami
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-heading leading-tight">
            Mitra Profesional untuk Setiap Kebutuhan Usaha
          </h2>
        </div>
        
        {/* 2. Tambahkan Kelas pada Grid Kartu */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((s, i) => (
            <div 
              key={s.title} 
              className="reveal-on-scroll group bg-card rounded-[2rem] p-8 shadow-warm hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 border border-border/40"
              style={{ transitionDelay: `${i * 100}ms` }} // Efek animasi berurutan (staggered)
            >
              <div className="w-16 h-16 rounded-2xl bg-accent grid place-items-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold font-display text-heading">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              <a href="#rfq" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Pelajari Lebih Lanjut <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}