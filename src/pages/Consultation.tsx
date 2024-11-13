import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/home" className="inline-flex items-center text-white/60 hover:text-white">
          <span className="text-lg">← Kembali</span>
        </Link>

        <h1 className="text-4xl font-bold">Konsultasi Tani</h1>

        <div className="grid gap-6">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl">Chat dengan Ahli</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                Konsultasikan masalah pertanian Anda dengan para ahli kami
              </p>
              <Button className="w-full bg-leaf text-forest hover:bg-leaf/90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Mulai Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-white/80">
                <li>• Bagaimana cara mengatasi hama tanaman?</li>
                <li>• Kapan waktu terbaik untuk menanam?</li>
                <li>• Tips perawatan tanaman organik</li>
                <li>• Rekomendasi pupuk terbaik</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Consultation;