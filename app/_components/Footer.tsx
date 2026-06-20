import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1524] text-white py-16 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Profil */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3 mb-6">
              {/* WADAH LOGO YANG SUDAH DIBUAT BULAT SEMPURNA */}
              <div className="relative h-12 w-12 bg-white rounded-full p-1 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/Logo.png" 
                  alt="Logo Lavato" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-lg leading-tight">CV Lavato Trimitra</h2>
                <p className="text-[10px] text-[#facc15] tracking-widest uppercase">Nusantara</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Mitra profesional untuk setiap kebutuhan usaha, menyediakan layanan terintegrasi dengan standar profesionalisme tinggi di Indonesia.
            </p>
          </div>
          
          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#facc15] font-playfair">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/projek" className="hover:text-white transition-colors">Proyek</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#facc15] font-playfair">Layanan</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/layanan" className="hover:text-white transition-colors">Konstruksi & Pengadaan</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Jasa Konsultasi</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">MBG & SPPG</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Trading & Supplier</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Cleaning Service</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Security Service</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#facc15] font-playfair">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#facc15] shrink-0 mt-0.5" />
                <span>JL. Dadap Raya, Perumahan Griya Parungpanjang Blok D II/H No. 1-2, RT/RW 003/04, Ds. Kabasiran, Kec. Parung Panjang, Bogor, Jawa Barat 16360</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#facc15] shrink-0" />
                <span>+62 812-9979-9010</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#facc15] shrink-0" />
                <span>lavatotrimitra.nusantara<br/>@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta Bawah */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
          <p>© 2026 CV Lavato Trimitra Nusantara. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}