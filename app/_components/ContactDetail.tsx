'use client';

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ContactDetail() {
  const contactCards = [
    {
      icon: <MapPin className="h-6 w-6 text-[#facc15]" />,
      title: "Alamat Kantor",
      desc: "JL. Dadap Raya, Perumahan Griya Parungpanjang Blok D II/H No. 1-2, RT/RW 003/04, Ds. Kabasiran, Kec. Parung Panjang, Bogor, Jawa Barat 16360",
      actionLabel: "Lihat di Peta",
      link: "#"
    },
    {
      icon: <Phone className="h-6 w-6 text-[#facc15]" />,
      title: "Telepon & WhatsApp",
      desc: "62 812-9979-9010",
      actionLabel: "Hubungi WhatsApp",
      link: "https://wa.me/6281299799010"
    },
    {
      icon: <Mail className="h-6 w-6 text-[#facc15]" />,
      title: "Email Resmi",
      desc: "lavatotrimitra.nusantara@gmail.com",
      actionLabel: "Kirim Email",
      link: "mailto:lavatotrimitra.nusantara@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#facc15]" />,
      title: "Jam Operasional",
      desc: "Senin - Jumat: 08.00 - 17.00 WIB\nSabtu: 08.00 - 12.00 WIB",
      actionLabel: "Hari Kerja",
      link: "#"
    }
  ];

  return (
    <section className="bg-white w-full overflow-hidden">
      
      {/* 1. HEADER BANNER BIRU TUA (NAVY) */}
      <div className="w-full bg-[#0c1524] text-white py-16 px-6 md:px-20 border-b border-[#facc15]/20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#facc15] text-xs font-bold tracking-widest uppercase block mb-2">
            Hubungi Hubungan Korporat
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold tracking-wide mb-4">
            Kontak Kami
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Kami siap mendengar kebutuhan proyek dan kemitraan Anda. Silakan hubungi kami melalui saluran komunikasi resmi di bawah ini.
          </p>
        </div>
      </div>

      {/* 2. AREA UTAMA: KARTU KONTAK & FORMULIR PESAN */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Kiri: Grid 4 Kartu Informasi Kontak (4 Kolom Laptop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full"
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#0c1524] flex items-center justify-center shrink-0 shadow-md">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#0c1524] text-base mb-1">{card.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
              
              {card.link !== "#" && (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-bold text-[#0c1524] hover:text-[#facc15] inline-flex items-center gap-1 mt-2 transition-colors pl-16"
                >
                  {card.actionLabel}
                  <MessageSquare className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Kanan: Formulir Pesan Langsung Cepat (7 Kolom Laptop) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden w-full"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#facc15]" />
          
          <h3 className="font-playfair text-2xl font-bold text-[#0c1524] mb-2">
            Kirim Pesan Langsung
          </h3>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Punya pertanyaan umum atau penawaran kerja sama? Isi formulir singkat di bawah ini untuk merespon Anda secara kilat.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Nama Lengkap</label>
                <Input type="text" placeholder="Masukkan nama Anda" className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] py-5 rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Nama Perusahaan / Instansi</label>
                <Input type="text" placeholder="Nama Perusahaan (Opsional)" className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] py-5 rounded-md" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Alamat Email</label>
                <Input type="email" placeholder="nama@perusahaan.com" className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] py-5 rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Nomor Telepon / WA</label>
                <Input type="tel" placeholder="Contoh: 0812345678" className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] py-5 rounded-md" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Subjek Pesan</label>
              <Input type="text" placeholder="Kebutuhan Kerja Sama / Pertanyaan Umum" className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] py-5 rounded-md" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0c1524] uppercase tracking-wider">Isi Pesan Anda</label>
              <Textarea placeholder="Tuliskan detail pesan Anda di sini secara terperinci..." rows={5} className="bg-slate-50/50 border-slate-200 focus-visible:ring-[#facc15] rounded-md resize-none" />
            </div>

            <Button type="submit" className="w-full bg-[#0c1524] hover:bg-[#1e293b] text-white font-bold py-6 rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-base">
              Kirim Pesan Sekarang
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}