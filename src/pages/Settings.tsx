import { Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <Settings2 className="w-8 h-8" />
          Pengaturan
        </h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Notifikasi</h2>
            <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
              <span>Notifikasi Push</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
              <span>Pengingat Harian</span>
              <Switch />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Akun</h2>
            <div className="p-4 bg-white/10 rounded-lg">
              <p>Email</p>
              <p className="text-white/60">user@example.com</p>
            </div>
            <button className="w-full p-4 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;