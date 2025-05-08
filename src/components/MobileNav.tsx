
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, MapPin, User, Info } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-10">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-primary' : 'text-gray-500'}`}>
          <Car className="h-6 w-6" />
          <span className="text-xs">Главная</span>
        </Link>
        
        <Link to="/rides" className={`flex flex-col items-center ${location.pathname === '/rides' ? 'text-primary' : 'text-gray-500'}`}>
          <MapPin className="h-6 w-6" />
          <span className="text-xs">Поездки</span>
        </Link>
        
        <Link to="/how-it-works" className={`flex flex-col items-center ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-gray-500'}`}>
          <Info className="h-6 w-6" />
          <span className="text-xs">Как</span>
        </Link>
        
        <Link to="/profile" className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-primary' : 'text-gray-500'}`}>
          <User className="h-6 w-6" />
          <span className="text-xs">Профиль</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
