import { Button } from "@/components/ui/button";

export default function Categories() {
  const categories = [
    "Material Bangunan", "Perlengkapan Kantor", "Alat Safety", 
    "Jasa Renovasi", "Pesanan Besar", "Pengadaan Mendesak"
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-[#FCFAF5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#4a3b32] mb-3">Yang Anda Cari?</h2>
        <p className="text-stone-500 text-sm mb-10">Pilih kategori yang sesuai dengan kebutuhan Anda.</p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <Button 
              key={i} 
              variant="outline" 
              className="rounded-full px-6 py-5 text-stone-600 border-stone-200 bg-white hover:bg-stone-50 hover:text-[#E07A5F]"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}