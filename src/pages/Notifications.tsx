import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <Bell className="w-8 h-8" />
          Notifikasi
        </h1>
        
        <div className="space-y-4">
          {/* Example notifications */}
          <div className="p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/60">Hari ini</p>
            <p className="mt-2">Waktunya menyiram tanaman!</p>
          </div>
          
          <div className="p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/60">Kemarin</p>
            <p className="mt-2">Tips baru tersedia: Cara merawat tanaman hias</p>
          </div>
          
          <div className="p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/60">3 hari yang lalu</p>
            <p className="mt-2">Peringatan cuaca: Hujan lebat diprediksi besok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;