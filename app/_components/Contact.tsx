import React from "react";

const PHONES = [
  { num: "+62 811-9621-23", label: "Ikhsan", wa: "62811962123" },
  { num: "+62 812-9979-9010", label: "Rina", wa: "6281299799010" },
  { num: "+62 813-1597-8244", label: "Gudang", wa: "6281315978244" },
];

export default function Contact() {
  return (
    <section id="kontak" className="py-20 sm:py-28 bg-[#FCFAF5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center reveal-on-scroll mb-12">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-xs">Hubungi Kami</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold font-playfair text-[#4a3b32]">Kontak</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Kolom Kiri: Kartu Alamat & Kontak */}
          <div className="reveal-on-scroll bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold font-playfair text-[#4a3b32]">Alamat Kantor</h3>
            <p className="mt-3 text-stone-600 text-sm leading-relaxed">
              Jl. Dadap Raya, Perumahan Griya Parungpanjang Blok D II/H No. 1-2, Kabasiran, Parung Panjang, Bogor, Jawa Barat 16360, Indonesia
            </p>
            
            <div className="mt-8 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400">WhatsApp</h4>
              
              {/* List Nomor HP dengan efek hover */}
              {PHONES.map((p) => (
                <a key={p.num} href={`https://wa.me/${p.wa}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#E07A5F] transition-colors duration-300 shadow-sm">
                    {/* Icon WhatsApp/Chat */}
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#4a3b32] group-hover:text-[#E07A5F] transition-colors">{p.num}</div>
                    <div className="text-xs text-stone-500">{p.label}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-stone-100 space-y-3 text-sm">
              <div>
                <span className="font-bold text-stone-600">Email:</span> 
                <a href="mailto:lavatotrimitra.nusantara@gmail.com" className="text-[#E07A5F] hover:underline ml-2">lavatotrimitra.nusantara@gmail.com</a>
              </div>
              <div>
                <span className="font-bold text-stone-600">Jam Kerja:</span> 
                <span className="text-stone-500 ml-2">Senin – Sabtu, 08.00 – 17.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta Lokasi */}
          {/* Tambah sedikit delay animasi (200ms) agar muncul setelah kartu sebelah kiri */}
          <div className="reveal-on-scroll rounded-[2rem] overflow-hidden shadow-sm border border-stone-100 min-h-[400px] group" style={{ transitionDelay: '200ms' }}>
            {/* Peta akan berwarna abu-abu (grayscale) dan berubah normal saat di-hover */}
            <iframe
              title="Lokasi CV Lavato Trimitra Nusantara"
              src="https://www.google.com/maps?q=Parung+Panjang+Bogor&output=embed"
              className="w-full h-full min-h-[400px] border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}