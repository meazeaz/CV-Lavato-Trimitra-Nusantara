'use client';

import { Award, CheckCircle, Grid, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <Award className="h-8 w-8 text-[#0c1524]" />, title: "Pengalaman & Keahlian", desc: "Didukung oleh tim profesional dengan jam terbang tinggi di berbagai sektor industri." },
  { icon: <CheckCircle className="h-8 w-8 text-[#0c1524]" />, title: "Kualitas Terjamin", desc: "Menerapkan standar kontrol mutu yang ketat untuk setiap layanan dan pengerjaan proyek." },
  { icon: <Grid className="h-8 w-8 text-[#0c1524]" />, title: "Layanan Terintegrasi", desc: "Memberikan solusi end-to-end dari hulu ke hilir untuk kemudahan operasional klien." },
  { icon: <Users className="h-8 w-8 text-[#0c1524]" />, title: "Fokus Pada Klien", desc: "Pendekatan adaptif yang disesuaikan dengan kebutuhan unik dan target setiap instansi." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0c1524] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Kenapa Memilih Lavato?</h2>
          <p className="text-white/80 leading-relaxed">Kami berkomitmen memberikan nilai tambah terbaik melalui dedikasi, transparansi, dan inovasi yang berkelanjutan.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {features.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center flex flex-col items-center group">
              <div className="h-20 w-20 rounded-full bg-[#facc15] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#facc15]/20">
                {item.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}