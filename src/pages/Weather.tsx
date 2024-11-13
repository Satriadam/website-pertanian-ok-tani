import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, CloudSun, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const Weather = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/home" className="inline-flex items-center text-white/60 hover:text-white">
          <span className="text-lg">← Kembali</span>
        </Link>

        <h1 className="text-4xl font-bold">Info Cuaca</h1>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl">Cuaca Hari Ini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CloudSun className="w-12 h-12 text-leaf" />
                <div>
                  <p className="text-3xl font-bold">28°C</p>
                  <p className="text-white/60">Cerah Berawan</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">Kelembaban</p>
                <p className="text-xl">75%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <CloudRain className="w-8 h-8 mx-auto mb-2 text-leaf" />
              <p className="text-sm text-white/60">Curah Hujan</p>
              <p className="text-xl">2.5 mm</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <Thermometer className="w-8 h-8 mx-auto mb-2 text-leaf" />
              <p className="text-sm text-white/60">Suhu Tanah</p>
              <p className="text-xl">25°C</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl">Prakiraan 5 Hari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Senin", temp: "29°C", icon: CloudSun },
                { day: "Selasa", temp: "28°C", icon: Cloud },
                { day: "Rabu", temp: "27°C", icon: CloudRain },
                { day: "Kamis", temp: "28°C", icon: CloudSun },
                { day: "Jumat", temp: "30°C", icon: CloudSun },
              ].map((item) => (
                <div key={item.day} className="flex items-center justify-between">
                  <span className="text-white/80">{item.day}</span>
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-leaf" />
                    <span>{item.temp}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Weather;