import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  // Mengganti statisik angka dengan Nilai Perusahaan (LAVATO) sesuai profil
  const coreValues = [
    { letter: "L", label: "Loyalitas", desc: "Menjaga kepercayaan mitra." },
    { letter: "A", label: "Amanah", desc: "Integritas & tanggung jawab." },
    { letter: "V", label: "Visioner", desc: "Inovasi & perkembangan." },
    { letter: "A", label: "Aktif", desc: "Cepat, tanggap, produktif." },
    { letter: "T", label: "Transparan", desc: "Keterbukaan profesional." },
    { letter: "O", label: "Optimal", desc: "Hasil kerja yang terbaik." },
  ];

  return (
    <section id="tentang" className="px-6 md:px-20 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri: Teks & Nilai Perusahaan */}
        <div className="reveal-on-scroll pr-0 md:pr-4">
          <p className="text-teal-600 text-xs font-bold tracking-widest mb-3 uppercase">
            TENTANG PERUSAHAAN
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4a3b32] mb-6 leading-[1.1]">
            Mitra Profesional untuk Setiap Kebutuhan Usaha
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed text-sm md:text-base">
            CV LAVATO TRIMITRA NUSANTARA adalah perusahaan yang bergerak di bidang jasa profesional dan pengadaan terpadu yang berfokus pada pelayanan berkualitas, profesionalisme, dan keberlanjutan usaha. Kami hadir sebagai mitra strategis dalam mendukung kebutuhan operasional pemerintah, swasta, lembaga pendidikan, hingga industri.
          </p>

          {/* Grid Nilai Perusahaan (LAVATO) */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {coreValues.map((val, index) => (
              <div 
                key={index} 
                className="reveal-on-scroll group bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default flex items-start gap-3"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="font-playfair text-2xl font-bold text-[#E07A5F] group-hover:scale-110 transition-transform origin-left">
                  {val.letter}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-800">{val.label}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol interaktif */}
          <Button className="bg-[#4a3b32] hover:bg-[#382c25] text-white rounded-full px-8 py-6 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Kenali Lebih Lanjut →
          </Button>
        </div>

        {/* Kolom Kanan: Gambar & Badge Melayang */}
        <div className="relative mt-10 lg:mt-0 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          
          {/* Efek cahaya/glow di belakang gambar */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#E07A5F]/20 to-teal-600/20 rounded-[2.5rem] blur-2xl opacity-60" />

          {/* Gambar Utama (Zoom lambat saat di-hover) */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
              alt="Operasional CV Lavato Trimitra Nusantara" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Badge (Legalitas) bereaksi saat di-hover */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="bg-teal-50 p-2.5 rounded-full flex-shrink-0">
              <Check className="h-5 w-5 text-teal-600" strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#4a3b32] leading-tight">Legalitas Terjamin</p>
              <p className="text-xs text-stone-500">NIB & NPWP Terdaftar</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}