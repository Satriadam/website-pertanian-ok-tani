import { Settings2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:text-white/80"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <Settings2 className="w-8 h-8" />
            Pengaturan
          </h1>
        </div>
        
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