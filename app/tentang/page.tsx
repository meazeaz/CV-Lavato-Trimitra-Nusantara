'use client';

import Navbar from "../_components/Navbar";
import About from "../_components/About";
import VisiMisiValues from "../_components/VisiMisiValues"; // Import komponen baru Anda
import Footer from "../_components/Footer";

export default function TentangPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col pt-20">
      {/* 1. Navigasi Atas */}
      <Navbar />

      {/* 2. Banner Atas & Profil Detail */}
      <About />

      {/* 3. Komponen Visi Misi & Nilai Perusahaan Baru (Menggantikan Features) */}
      <VisiMisiValues />

      {/* 4. Footer Penutup */}
      <Footer />
    </main>
  );
}