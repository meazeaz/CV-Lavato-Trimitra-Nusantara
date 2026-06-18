import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    { num: "1", title: "Proses Pengadaan Mudah", desc: "Kami kelola seluruh proses dari permintaan hingga pengiriman." },
    { num: "2", title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi. Semua biaya dijelaskan di awal." },
    { num: "3", title: "Respons Cepat", desc: "Balasan WhatsApp dalam 1 jam pada jam kerja." },
    { num: "4", title: "Mitra Supplier Eksklusif", desc: "Kami bekerja dengan vendor terpercaya di seluruh Jawa." },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-600 text-xs font-bold tracking-widest mb-2 uppercase">KEUNGGULAN</p>
        <h2 className="font-playfair text-4xl font-bold text-[#4a3b32] mb-10">Mengapa Memilih Kami?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <Card key={i} className="border-none shadow-sm bg-[#FCFAF5]">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold mb-5">
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