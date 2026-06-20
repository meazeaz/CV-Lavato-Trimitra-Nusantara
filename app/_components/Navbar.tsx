'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Import ikon menu HP
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek transisi Navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRfqScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup menu HP jika sedang terbuka
    if (pathname === "/") {
      const element = document.getElementById("rfq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push("/#rfq");
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5 shadow-sm"
    }`}>
      <div className="px-6 md:px-20 flex items-center justify-between">
        
        {/* Logo & Nama Brand */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
            <Image src="/images/Logo.png" alt="Logo CV Lavato" width={48} height={48} priority className="object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h1 className="font-playfair font-bold text-lg md:text-xl leading-tight text-[#0c1524] group-hover:text-[#facc15] transition-colors">
              CV Lavato Trimitra
            </h1>
          </div>
        </Link>

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {[
            { name: "Beranda", path: "/" },
            { name: "Tentang Kami", path: "/tentang" },
            { name: "Layanan", path: "/layanan" },
            { name: "Proyek", path: "/projek" },
            { name: "Kontak Kami", path: "/kontak" }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`relative transition-colors hover:text-[#facc15] py-2 ${pathname === link.path ? 'text-[#facc15]' : ''}`}
            >
              {link.name}
              {/* Garis bawah animasi saat aktif */}
              {pathname === link.path && (
                <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-[#facc15]" />
              )}
            </Link>
          ))}
          <Button onClick={handleRfqScroll} className="bg-[#0c1524] hover:bg-[#1e293b] text-white rounded-md px-6 py-5 font-medium transition-all duration-300 hover:scale-105 shadow-md">
            Hubungi Kami
          </Button>
        </div>

        {/* Tombol Menu HP */}
        <button className="md:hidden text-[#0c1524]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Dropdown Menu HP (Animasi Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-slate-700">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#facc15]">Beranda</Link>
              <Link href="/tentang" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#facc15]">Tentang Kami</Link>
              <Link href="/layanan" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#facc15]">Layanan</Link>
              <Button onClick={handleRfqScroll} className="w-full bg-[#0c1524] text-white mt-2">Hubungi Kami</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}