import { Link } from "react-router-dom";
import { Home, Bell, Settings2, Cloud, Calendar, Sprout } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-4xl font-bold">HOME</h1>
        
        <div className="grid gap-6">
          <Link 
            to="/consultation"
            className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-4"
          >
            <Sprout className="w-8 h-8 text-leaf" />
            <span className="text-xl">Konsultasi tani</span>
          </Link>
          
          <Link 
            to="/weather"
            className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-4"
          >
            <Cloud className="w-8 h-8 text-leaf" />
            <span className="text-xl">Info cuaca</span>
          </Link>
          
          <Link 
            to="/calendar"
            className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-4"
          >
            <Calendar className="w-8 h-8 text-leaf" />
            <span className="text-xl">Kalender tanaman</span>
          </Link>
        </div>
      </div>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-forest border-t border-white/20 p-4">
        <div className="max-w-md mx-auto flex justify-around">
          <Link to="/home" className="text-leaf">
            <Home className="w-6 h-6" />
          </Link>
          <Link to="/notifications" className="text-white/60 hover:text-white">
            <Bell className="w-6 h-6" />
          </Link>
          <Link to="/settings" className="text-white/60 hover:text-white">
            <Settings2 className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;