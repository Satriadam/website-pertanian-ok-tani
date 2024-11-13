import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogin = () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Mohon masukkan alamat email",
      });
      return;
    }
    
    // Simulasi login berhasil
    toast({
      title: "Login berhasil",
      description: "Selamat datang kembali!",
    });
    navigate("/home");
  };
  
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/" className="inline-block">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">SELAMAT DATANG</h1>
            <p className="text-gray-300">Masuk ke akun anda</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Alamat email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20"
              />
            </div>
            
            <Button 
              className="w-full bg-leaf text-forest hover:bg-leaf/90"
              onClick={handleLogin}
            >
              LANJUTKAN
            </Button>
            
            <div className="text-center space-y-4">
              <p>Sign with</p>
              <div className="flex justify-center gap-4">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                  <img src="/google.svg" alt="Google" className="w-6 h-6" />
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                  <img src="/apple.svg" alt="Apple" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;