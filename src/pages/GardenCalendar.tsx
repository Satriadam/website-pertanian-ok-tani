import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const GardenCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/home" className="inline-flex items-center text-white/60 hover:text-white">
          <span className="text-lg">← Kembali</span>
        </Link>

        <h1 className="text-4xl font-bold">Kalender Tanaman</h1>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl">Jadwal Tanam</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-white/5 rounded-lg p-4"
            />
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl">Aktivitas Hari Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-leaf"></div>
                <span>Menanam bibit tomat</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-leaf"></div>
                <span>Pemupukan tanaman cabai</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-leaf"></div>
                <span>Penyiraman rutin</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GardenCalendar;