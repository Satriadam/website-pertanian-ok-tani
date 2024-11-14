import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-forest">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Hero Content */}
        <div className="flex-1 space-y-8 text-white animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Solusi Terbaik untuk
            <span className="text-leaf block mt-2">Pertanian Modern</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl">
            Tingkatkan hasil panen Anda dengan teknologi smart farming. Dapatkan panduan, konsultasi, dan informasi cuaca dalam satu aplikasi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-3 bg-leaf text-forest font-medium rounded-lg hover:bg-leaf/90 transition-colors"
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
            >
              Daftar Akun
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <h4 className="text-3xl font-bold text-leaf">10K+</h4>
              <p className="text-white/60">Pengguna Aktif</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-leaf">95%</h4>
              <p className="text-white/60">Tingkat Kepuasan</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-leaf">24/7</h4>
              <p className="text-white/60">Dukungan</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1 relative animate-fade-in">
          <img
            src="/plant-growth.jpg"
            alt="Smart Farming"
            className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;