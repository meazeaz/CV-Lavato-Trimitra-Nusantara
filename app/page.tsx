"use client";

import { useEffect } from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import About from "./_components/About";
import Products from "./_components/Products";
import Features from "./_components/Features";
import Categories from "./_components/Categories";
import RfqForm from "./_components/RfqForm";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  // Animasi Muncul saat di-Scroll (Reveal on Scroll) dari Lovable
  // Kita taruh di sini agar efeknya berjalan untuk semua komponen di bawahnya
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.12 }
    );
    
    // Mencari semua elemen yang punya class 'reveal-on-scroll' di dalam komponen
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => io.observe(el));
    
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Memanggil Komponen Navbar */}
      <Navbar />

      <main>
        {/* Memanggil Komponen Section secara berurutan */}
        <Hero />
        <Services />
        <About />
        <Products />
        <Features />
        <Categories />
        
        {/* Section RFQ Form */}
        <section id="rfq" className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center reveal-on-scroll mb-12">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                Permintaan Penawaran
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-heading">
                Kirim Detail Kebutuhan Anda
              </h2>
              <p className="mt-4 text-muted-foreground text-sm">
                Tim kami akan memberikan estimasi penawaran harga dalam 1×24 jam kerja.
              </p>
            </div>
            
            {/* Memanggil Komponen Form RFQ Interaktif */}
            <RfqForm />
          </div>
        </section>

        <Contact />
      </main>

      {/* Memanggil Komponen Footer */}
      <Footer />
      
    </div>
  );
}