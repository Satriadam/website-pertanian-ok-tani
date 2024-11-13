import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = () => {
    if (!email || !name) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Mohon lengkapi semua data",
      });
      return;
    }

    toast({
      title: "Registrasi berhasil",
      description: "Silahkan login dengan akun anda",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/login" className="inline-block">
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">DAFTAR AKUN</h1>
            <p className="text-gray-300">Buat akun baru</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Nama Lengkap</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Alamat Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20"
                placeholder="Masukkan email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Password</label>
              <Input
                type="password"
                className="bg-white/10 border-white/20"
                placeholder="Masukkan password"
              />
            </div>

            <Button
              className="w-full bg-leaf text-forest hover:bg-leaf/90"
              onClick={handleRegister}
            >
              DAFTAR
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-300">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-leaf hover:underline">
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;