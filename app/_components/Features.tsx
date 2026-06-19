import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    { 
      num: "1", 
      title: "Profesional & Terpercaya", 
      desc: "Didukung tim yang berpengalaman dan berorientasi pada kualitas layanan." 
    },
    { 
      num: "2", 
      title: "Terintegrasi", 
      desc: "Menyediakan solusi kebutuhan operasional dalam satu sistem layanan." 
    },
    { 
      num: "3", 
      title: "Responsif & Adaptif", 
      desc: "Mampu menyesuaikan kebutuhan mitra dan perkembangan program pemerintah." 
    },
    { 
      num: "4", 
      title: "Berorientasi Kemitraan", 
      desc: "Membangun hubungan kerja jangka panjang yang saling menguntungkan." 
    },
    { 
      num: "5", 
      title: "Mendukung Indonesia Emas 2045", 
      desc: "Berpartisipasi aktif dalam program peningkatan kualitas gizi dan SDM nasional." 
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-600 text-xs font-bold tracking-widest mb-2 uppercase">KEUNGGULAN</p>
        <h2 className="font-playfair text-4xl font-bold text-[#4a3b32] mb-10">Keunggulan Perusahaan</h2>

        {/* Grid diubah menjadi 3 kolom (lg:grid-cols-3) agar 5 item dapat menyesuaikan ruang dengan rapi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <Card key={i} className="border-none shadow-sm bg-[#FCFAF5] hover:shadow-md transition-all group">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feat.num}
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#4a3b32] mb-2">{feat.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{feat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}