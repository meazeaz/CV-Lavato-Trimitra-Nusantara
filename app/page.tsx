import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Features from "./_components/Features";
import RfqForm from "./_components/RfqForm";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* 1. Navigasi Atas */}
      <Navbar />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. Layanan Utama (Abu Muda) */}
      <Services />

      {/* 4. Kenapa Memilih Lavato (Navy Gelap) */}
      <Features />
      
      {/* 5. Form RFQ (Putih Bersih) */}
      <section id="rfq" className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#0c1524] mb-4">
            Mulai Proyek Anda Bersama Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Isi formulir di bawah ini untuk mendapatkan konsultasi awal dan penawaran harga terbaik. Tim spesialis kami akan meninjau kebutuhan Anda dan segera merespon.
          </p>
        </div>
        
        {/* Form RFQ & Integrasi Zoho */}
        <div className="max-w-4xl mx-auto">
          <RfqForm />
        </div>
      </section>
      
      {/* 6. Footer Bawah */}
      <Footer />
    </main>
  );
}