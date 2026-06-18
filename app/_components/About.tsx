import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  const stats = [
    { value: "10+", label: "Tahun Pengalaman Gabungan" },
    { value: "200+", label: "Proyek Didukung" },
    { value: "50+", label: "Klien Puas" },
    { value: "100%", label: "Komitmen Respons Cepat" },
  ];

  return (
    // Menghapus bg-[#FCFAF5] agar background-nya transparan & sama seperti Hero
    <section id="tentang" className="px-6 md:px-20 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri: Teks & Statistik */}
        <div className="reveal-on-scroll pr-0 md:pr-4">
          <p className="text-teal-600 text-xs font-bold tracking-widest mb-3 uppercase">
            TENTANG KAMI
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4a3b32] mb-6 leading-[1.1]">
            Tentang CV Lavato Trimitra Nusantara
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed text-sm md:text-base">
            Didirikan dengan misi jelas untuk mendukung bisnis dan individu dalam kebutuhan pengadaan dan konstruksi yang terpercaya. Meskipun baru, tim kami memiliki pengalaman bertahun-tahun di bidang logistik, manajemen proyek, dan jaringan supplier. Kami fokus pada transparansi, respons cepat, dan solusi fleksibel.
          </p>

          {/* Grid Statistik dengan efek hover & animasi scroll berurutan */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="reveal-on-scroll group bg-white p-5 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#E07A5F] mb-1 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </h3>
                <p className="text-xs text-stone-500 font-medium group-hover:text-stone-800 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tombol interaktif (membesar saat di-hover) */}
          <Button className="bg-[#4a3b32] hover:bg-[#382c25] text-white rounded-full px-8 py-6 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Kenali Lebih Lanjut →
          </Button>
        </div>

        {/* Kolom Kanan: Gambar & Badge Melayang */}
        <div className="relative mt-10 lg:mt-0 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          
          {/* Efek cahaya/glow di belakang gambar agar lebih elegan */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#E07A5F]/20 to-teal-600/20 rounded-[2.5rem] blur-2xl opacity-60" />

          {/* Gambar Utama (Zoom lambat saat di-hover) */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Tim CV Lavato Trimitra Nusantara" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Badge (Terverifikasi) bereaksi saat di-hover */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="bg-teal-50 p-2.5 rounded-full flex-shrink-0">
              <Check className="h-5 w-5 text-teal-600" strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#4a3b32] leading-tight">Terverifikasi</p>
              <p className="text-xs text-stone-500">CV dengan NPWP</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}