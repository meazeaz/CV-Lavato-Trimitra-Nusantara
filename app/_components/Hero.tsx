'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToRfq = () => {
    const element = document.getElementById("rfq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden w-full pt-20">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Gedung Korporat Modern"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1a2c]/85 md:bg-[#0c1524]/90 z-10 backdrop-brightness-75" />
      </div>

      <div className="relative z-20 text-center px-6 md:px-20 max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#facc15]/40 bg-[#facc15]/5 text-[#facc15] rounded-full px-5 py-1.5 font-medium tracking-wide text-xs mb-8 uppercase cursor-default"
        >
          CV Lavato Trimitra Nusantara
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="font-playfair text-4xl md:text-7xl font-bold text-white leading-tight md:leading-[1.15] mb-6 max-w-4xl"
        >
          Mitra Profesional untuk <span className="text-[#facc15]">Setiap Kebutuhan Usaha</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-xl text-white/90 mb-12 max-w-3xl leading-relaxed"
        >
          Menyediakan layanan terintegrasi mulai dari konstruksi, konsultasi manajemen, hingga dukungan program strategis pemerintah dengan standar profesionalisme tinggi.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <Button 
            onClick={handleScrollToRfq}
            className="bg-[#facc15] hover:bg-[#eab308] text-[#0c1524] font-bold rounded-md px-8 py-6 text-base transition-all shadow-md hover:scale-105 duration-300"
          >
            Pelajari Layanan Kami
          </Button>
          <Button 
            onClick={handleScrollToRfq}
            variant="outline" 
            className="group rounded-md px-8 py-6 text-base border-white text-white bg-transparent hover:bg-white/10 transition-all hover:scale-105 duration-300"
          >
            Hubungi Kami
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}