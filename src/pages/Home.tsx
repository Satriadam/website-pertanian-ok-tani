import { Link } from "react-router-dom";
import { Home, Bell, Settings2, Cloud, Calendar, Sprout, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-forest text-white">
      {/* Header */}
      <header className="p-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OK TANI</h1>
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full bg-white/10"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-leaf/20 to-transparent p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Selamat Datang! 👋</h2>
          <p className="text-white/80">Mari mulai hari yang produktif untuk pertanian Anda</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/consultation">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Sprout className="w-8 h-8 text-leaf mb-3" />
                <h3 className="font-medium">Konsultasi</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/weather">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Cloud className="w-8 h-8 text-leaf mb-3" />
                <h3 className="font-medium">Cuaca</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/calendar">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calendar className="w-8 h-8 text-leaf mb-3" />
                <h3 className="font-medium">Kalender</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/consultation">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-leaf mb-3" />
                <h3 className="font-medium">Komunitas</h3>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Statistik Panen</h3>
                <TrendingUp className="text-leaf w-5 h-5" />
              </div>
              <div className="h-48 flex items-center justify-center text-white/60">
                Chart will be displayed here
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Aktivitas Terbaru</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-leaf"></div>
                    <p className="text-white/80">Pemupukan tanaman selesai</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-forest border-t border-white/10 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto flex justify-around p-4">
          <Link to="/home" className="text-leaf flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/notifications" className="text-white/60 hover:text-white flex flex-col items-center">
            <Bell className="w-6 h-6" />
            <span className="text-xs mt-1">Notifikasi</span>
          </Link>
          <Link to="/settings" className="text-white/60 hover:text-white flex flex-col items-center">
            <Settings2 className="w-6 h-6" />
            <span className="text-xs mt-1">Pengaturan</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;