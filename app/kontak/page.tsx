'use client';

import Navbar from "../_components/Navbar";
import ContactDetail from "../_components/ContactDetail"; // Panggil komponen baru
import Footer from "../_components/Footer";

export default function KontakPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col pt-20">
      {/* 1. Navigasi Lintas Halaman */}
      <Navbar />

      {/* 2. Detail Informasi Kontak & Formulir Interaktif */}
      <ContactDetail />

      {/* 3. Penutup Kaki Halaman */}
      <Footer />
    </main>
  );
}