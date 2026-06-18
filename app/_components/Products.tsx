import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      badge: "Stok Parung Panjang",
      title: "Pasir Cor",
      desc: "Grade A, bersih",
      price: "Rp 550.000 / truk",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Gudang Bogor",
      title: "Bata Ringan",
      desc: "Bersertifikat SNI",
      price: "Rp 1.200.000 / kubik",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Area Bogor",
      title: "Jasa Renovasi Rumah",
      desc: "Termasuk desain & tenaga kerja",
      price: "Mulai Rp 15.000.000",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      badge: "Jakarta / Bogor",
      title: "Instalasi Listrik",
      desc: "Teknisi bersertifikat",
      price: "Sesuai proyek",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-[#FCFAF5]">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-600 text-xs font-bold tracking-widest mb-2 uppercase">PRODUK & PROYEK</p>
        <h2 className="font-playfair text-4xl font-bold text-[#4a3b32] mb-3">Produk & Proyek Unggulan</h2>
        <p className="text-stone-500 text-sm mb-10">Pilihan terbaik kami untuk kebutuhan konstruksi dan pengadaan Anda.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <Card key={i} className="border-none shadow-sm overflow-hidden bg-white hover:shadow-md transition-all">
              <div className="relative h-48 w-full">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                <Badge className="absolute top-3 left-3 bg-white text-stone-800 hover:bg-white border-none shadow-sm text-xs font-semibold">
                  {item.badge}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-playfair text-xl font-bold text-[#4a3b32] mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 mb-4">{item.desc}</p>
                <p className="font-playfair font-bold text-[#E07A5F] text-lg mb-5">{item.price}</p>
                <Button className="w-full bg-[#F3E5D8] text-[#D46B4A] hover:bg-[#e8d5c4] rounded-full font-semibold">
                  Minta Penawaran
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}