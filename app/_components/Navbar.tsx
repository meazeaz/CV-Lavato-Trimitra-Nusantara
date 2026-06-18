import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold font-playfair">L</div>
        <div>
          <h1 className="font-playfair font-bold text-lg leading-tight text-[#4a3b32]">CV Lavato Trimitra</h1>
          <p className="text-xs text-stone-500">Nusantara</p>
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
        <Link href="#" className="hover:text-[#E07A5F]">Beranda</Link>
        <Link href="#" className="hover:text-[#E07A5F]">Layanan</Link>
        <Link href="#" className="hover:text-[#E07A5F]">Tentang</Link>
        <Link href="#" className="hover:text-[#E07A5F]">Produk</Link>
        <Link href="#" className="hover:text-[#E07A5F]">RFQ</Link>
        <Link href="#" className="hover:text-[#E07A5F]">Kontak</Link>
      </div>
      <Button className="bg-[#E07A5F] hover:bg-[#c96a51] text-white rounded-full px-6">Ajukan Penawaran</Button>
    </nav>
  );
}