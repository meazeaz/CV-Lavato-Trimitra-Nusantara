'use client';

import { motion, Variants } from "framer-motion";
import { Eye, Target, Shield, Handshake, Lightbulb, BarChart3 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function VisiMisiValues() {
  const companyValues = [
    {
      icon: <Shield className="h-6 w-6 text-[#facc15]" />,
      title: "Integritas Tinggi",
      desc: "Menjalankan setiap kesepakatan kerja dengan kejujuran, transparansi penuh, dan kepatuhan hukum yang mutlak."
    },
    {
      icon: <Handshake className="h-6 w-6 text-[#facc15]" />,
      title: "Kemitraan Setara",
      desc: "Membangun hubungan jangka panjang yang saling menguntungkan dan adaptif terhadap kebutuhan setiap mitra kerja."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[#facc15]" />,
      title: "Inovasi Berkelanjutan",
      desc: "Terus memperbarui sistem manajemen dan kualitas pengadaan barang/jasa mengikuti perkembangan industri modern."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#facc15]" />,
      title: "Hasil Optimal",
      desc: "Berorientasi penuh pada efisiensi tinggi, ketepatan waktu distribusi, dan kepuasan maksimal pihak klien."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-slate-50 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION VISI & MISI ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Kartu Visi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#facc15] transition-all group-hover:w-3" />
            <div className="h-14 w-14 rounded-xl bg-[#0c1524] flex items-center justify-center mb-6 shadow-md shadow-[#0c1524]/10">
              <Eye className="h-7 w-7 text-[#facc15]" />
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#0c1524] mb-4">
              Visi Perusahaan
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Menjadi perusahaan pengadaan strategis dan penyedia jasa profesional berskala nasional yang terdepan, terpercaya dalam kualitas, serta menjadi pilar utama efisiensi bagi setiap mitra bisnis di Indonesia.
            </p>
          </motion.div>

          {/* Kartu Misi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#0c1524] text-white p-8 md:p-10 rounded-2xl shadow-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#facc15] transition-all group-hover:w-3" />
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-md">
              <Target className="h-7 w-7 text-[#facc15]" />
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-white">
              Misi Perusahaan
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm md:text-base list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold">01.</span>
                <span>Menyediakan produk pengadaan barang dan jasa konstruksi bermutu tinggi secara konsisten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold">02.</span>
                <span>Menerapkan tata kelola manajemen operasional yang responsif, transparan, dan akuntabel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold">03.</span>
                <span>Mengembangkan kompetensi dan integritas seluruh tenaga kerja profesional secara berkelanjutan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold">04.</span>
                <span>Menjamin kepatuhan penuh terhadap hukum, administrasi, serta aspek perpajakan negara.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ================= SECTION NILAI-NILAI PERUSAHAAN ================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#facc15] text-xs font-bold tracking-widest uppercase block mb-2">
              Fondasi Kerja
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0c1524]">
              Nilai-Nilai Utama Perusahaan
            </h2>
            <div className="w-16 h-1 bg-[#facc15] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((val, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <div className="h-12 w-12 rounded-lg bg-[#0c1524] flex items-center justify-center mb-5 group-hover:bg-[#facc15] transition-colors duration-300">
                  {val.icon}
                </div>
                <h4 className="font-bold text-[#0c1524] text-lg mb-2 group-hover:text-[#facc15] transition-colors">
                  {val.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}