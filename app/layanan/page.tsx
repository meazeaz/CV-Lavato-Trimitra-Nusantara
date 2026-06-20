'use client';

import Navbar from "../_components/Navbar";
import LayananDetail from "../_components/LayananDetail"; // Panggil komponen baru Anda
import Footer from "../_components/Footer";

export default function LayananPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col pt-20">
      {/* 1. Header Navigasi */}
      <Navbar />

      {/* 2. Detail 6 Layanan Utama Berserta Mutu Kerja */}
      <LayananDetail />

      {/* 3. Footer Bawah */}
      <Footer />
    </main>
  );
}