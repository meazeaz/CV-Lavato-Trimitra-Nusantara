import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Import ikon panah

export default function Hero() {
  return (
    // Gunakan min-h-screen untuk tinggi penuh, relative untuk overlay, overflow-hidden untuk gambar
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Gambar Latar Belakang dan Overlay Warna */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Bangunan Pencakar Langit Modern"
          layout="fill"
          objectFit="cover"
          priority // Memprioritaskan pemuatan gambar ini
          className="object-cover"
        />
        {/* Overlay warna teal/biru tua yang digelapkan, sesuaikan opasitas sesuai kebutuhan */}
        <div className="absolute inset-0 bg-[#0c1524]/85 z-10" />
      </div>

      {/* Konten teks yang dipusatkan (relative z-20 agar di atas overlay) */}
      <div className="relative z-20 text-center px-6 md:px-20 py-16 md:py-24 max-w-4xl">
        
        {/* Hapus Badge sesuai screenshot contoh */}
        
        {/* Judul Utama dengan teks kuning emas seperti di contoh */}
        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
          Mitra Profesional untuk <span className="text-[#facc15]">Setiap Kebutuhan Usaha</span>
        </h2>
        
        {/* Teks Deskripsi baru dengan teks putih seperti di contoh */}
        <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Menyediakan layanan terintegrasi mulai dari konstruksi, konsultasi manajemen, hingga dukungan program strategis pemerintah dengan standar profesionalisme tinggi.
        </p>
        
        {/* Dua Tombol dengan gaya seperti di contoh */}
        <div className="flex flex-wrap gap-4 justify-center">
          
          {/* Tombol Pertama: Kuning Penuh */}
          <Button className="bg-[#facc15] hover:bg-[#eab308] rounded-full px-8 py-6 text-base text-[#4a3b32] font-semibold transition-all hover:scale-105 hover:shadow-lg duration-300">
            Pelajari Layanan Kami
          </Button>
          
          {/* Tombol Kedua: Outline Transparan dengan Ikon Panah */}
          <Button variant="outline" className="group rounded-full px-8 py-6 text-base border-[#facc15] text-white hover:bg-[#facc15]/10 transition-all hover:scale-105 duration-300">
            Hubungi Kami
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> {/* Ikon panah dengan efek animasi */}
          </Button>
        </div>

        {/* Hapus bagian statistik sesuai screenshot contoh */}
      </div>
    </section>
  );
}