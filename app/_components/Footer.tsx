import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4a3b32] text-[#e8e4dc] py-16 px-6 md:px-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold font-playfair">L</div>
            <div>
              <h2 className="font-playfair font-bold text-white text-lg">CV Lavato Trimitra Nusantara</h2>
            </div>
          </div>
          <p className="text-sm opacity-80 max-w-sm mb-4">Mitra terpercaya untuk general trading, supplier, dan kontraktor.</p>
          <p className="text-xs opacity-60">NPWP: XX.XXX.XXX.X-XXX.000</p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6">Tautan Cepat</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li><Link href="#">Beranda</Link></li>
            <li><Link href="#">Layanan</Link></li>
            <li><Link href="#">RFQ</Link></li>
            <li><Link href="#">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Kontak</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li>+62 811-9621-23</li>
            <li>+62 812-9979-9010</li>
            <li>lavatotrimitra.nusantara@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs opacity-50">
        © 2026 CV Lavato Trimitra Nusantara. Hak cipta dilindungi.
      </div>
    </footer>
  );
}