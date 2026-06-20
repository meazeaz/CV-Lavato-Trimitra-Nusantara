'use client';

import Navbar from "../_components/Navbar";
import Products from "../_components/Products"; // Memanggil komponen modular proyek Anda
import Footer from "../_components/Footer";

export default function ProjekPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col pt-20">
      {/* 1. Navigasi Atas */}
      <Navbar />

      {/* 2. Daftar Galeri Portofolio Proyek Terintegrasi */}
      <Products />

      {/* 3. Footer Bawah */}
      <Footer />
    </main>
  );
}