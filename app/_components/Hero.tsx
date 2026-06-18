import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // Tambahkan animasi fade-in dan slide-up saat halaman pertama dimuat
    <section className="px-6 md:px-20 py-16 md:py-24 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Badge className="bg-[#F3E5D8] text-[#D46B4A] hover:bg-[#e8d5c4] transition-colors mb-6 border-none px-4 py-1 font-semibold tracking-wider text-xs cursor-default">
        TRADING • SUPPLIER • KONTRAKTOR
      </Badge>
      
      <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#4a3b32] leading-[1.1] mb-6">
        Mitra Terpercaya untuk <span className="text-[#E07A5F]">General Trading</span>, Supply Chain & Konstruksi
      </h2>
      
      <p className="text-lg text-stone-600 mb-10 max-w-2xl leading-relaxed">
        Melayani Bogor, Jakarta, dan seluruh Indonesia dengan integritas, kecepatan, dan layanan profesional.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-16">
        {/* Tambahkan efek hover membesar (hover:scale-105) pada tombol */}
        <Button className="bg-[#E07A5F] hover:bg-[#c96a51] rounded-full px-8 py-6 text-base text-white transition-all hover:scale-105 hover:shadow-lg duration-300">
          Ajukan Penawaran →
        </Button>
        <Button variant="outline" className="rounded-full px-8 py-6 text-base border-teal-600 text-teal-700 hover:bg-teal-50 transition-all hover:scale-105 duration-300">
          Layanan Kami
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-10">
        {/* Tambahkan efek interaktif pada statistik */}
        {[
          { num: "10+", label: "Tahun Pengalaman" },
          { num: "200+", label: "Proyek Didukung" },
          { num: "50+", label: "Klien Puas" },
          { num: "1x24", label: "Jam Respons" }
        ].map((stat, i) => (
          <div key={i} className="group cursor-default">
            <h3 className="font-playfair text-3xl font-bold text-[#4a3b32] group-hover:text-[#E07A5F] transition-colors duration-300">
              {stat.num}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}