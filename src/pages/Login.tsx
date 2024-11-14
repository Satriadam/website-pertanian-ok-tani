import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
    
    toast({
      title: "Login berhasil",
      description: "Selamat datang kembali!",
    });
    navigate("/home");
  };
  
  return (
    <div className="min-h-screen bg-forest text-white">
      <div className="container min-h-screen grid lg:grid-cols-2 gap-0">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center p-8 lg:p-12 animate-fade-in">
          <Link to="/" className="inline-block mb-8">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          
          <div className="max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">SELAMAT DATANG</h1>
              <p className="text-gray-300">Masuk ke akun anda untuk melanjutkan</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm">Alamat email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20"
                  placeholder="Masukkan email anda"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm">Password</label>
                <Input
                  type="password"
                  className="bg-white/10 border-white/20"
                  placeholder="Masukkan password anda"
                />
              </div>

              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-leaf hover:underline">
                  Lupa password?
                </Link>
              </div>
              
              <Button 
                className="w-full bg-leaf text-forest hover:bg-leaf/90"
                onClick={handleLogin}
              >
                MASUK
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-300">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-leaf hover:underline">
                    Daftar sekarang
                  </Link>
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-forest text-white/60">atau masuk dengan</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 flex items-center justify-center gap-2">
                  <img src="/google.svg" alt="Google" className="w-5 h-5" />
                  <span>Google</span>
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 flex items-center justify-center gap-2">
                  <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                  <span>Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-forest to-transparent z-10"></div>
          <img
            src="/plant-growth.jpg"
            alt="Agriculture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;