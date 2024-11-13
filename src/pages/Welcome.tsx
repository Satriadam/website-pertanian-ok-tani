import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-forest text-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto space-y-8">
        <Link to="/" className="inline-block">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <div className="space-y-6 text-center">
          <div className="rounded-full overflow-hidden w-48 h-48 mx-auto">
            <img 
              src="/plant-growth.jpg" 
              alt="Plant Growth"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold">
            SELAMAT DATANG DI OK TANI
          </h1>
          
          <Link
            to="/login"
            className="block w-full py-3 px-4 bg-leaf text-forest-foreground rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            MASUK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;