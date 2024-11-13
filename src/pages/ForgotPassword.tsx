import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "newPassword">("email");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmitEmail = () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Mohon masukkan alamat email",
      });
      return;
    }
    
    toast({
      title: "Kode OTP terkirim",
      description: "Silahkan cek email anda",
    });
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Kode OTP tidak valid",
      });
      return;
    }
    
    setStep("newPassword");
  };

  const handleResetPassword = () => {
    toast({
      title: "Password berhasil direset",
      description: "Silahkan login dengan password baru",
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
            <h1 className="text-4xl font-bold">LUPA PASSWORD</h1>
            <p className="text-gray-300">
              {step === "email" && "Masukkan email untuk reset password"}
              {step === "otp" && "Masukkan kode OTP yang dikirim ke email"}
              {step === "newPassword" && "Masukkan password baru"}
            </p>
          </div>

          <div className="space-y-4">
            {step === "email" && (
              <>
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
                <Button
                  className="w-full bg-leaf text-forest hover:bg-leaf/90"
                  onClick={handleSubmitEmail}
                >
                  KIRIM KODE OTP
                </Button>
              </>
            )}

            {step === "otp" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">Kode OTP</label>
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                    className="gap-2"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <Button
                  className="w-full bg-leaf text-forest hover:bg-leaf/90"
                  onClick={handleVerifyOTP}
                >
                  VERIFIKASI
                </Button>
              </div>
            )}

            {step === "newPassword" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm">Password Baru</label>
                  <Input
                    type="password"
                    className="bg-white/10 border-white/20"
                    placeholder="Masukkan password baru"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Konfirmasi Password</label>
                  <Input
                    type="password"
                    className="bg-white/10 border-white/20"
                    placeholder="Konfirmasi password baru"
                  />
                </div>
                <Button
                  className="w-full bg-leaf text-forest hover:bg-leaf/90"
                  onClick={handleResetPassword}
                >
                  SIMPAN PASSWORD
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;