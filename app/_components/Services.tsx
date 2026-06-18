import React from "react";

// Data Konstan untuk Layanan (contoh dari blueprint Lovable)
const SERVICES_DATA = [
  { icon: "📦", title: "General Trading", desc: "Distribusi barang industri, alat safety, material bangunan, dan perlengkapan kantor." },
  { icon: "🚚", title: "Supplier", desc: "Pengadaan barang volume besar untuk proyek. Harga kompetitif, pengiriman terpercaya, dan syarat fleksibel." },
  { icon: "👷", title: "Kontraktor", desc: "Renovasi, instalasi, pengecatan, dan proyek konstruksi skala kecil hingga menengah." },
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
            Solusi lengkap untuk kebutuhan bisnis Anda
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