
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Car, User, Info } from 'lucide-react';

const Header: React.FC = () => {
  const { authState, logout } = useAuth();
  
  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="text-primary h-6 w-6" />
          <span className="font-bold text-2xl text-primary">HopIn</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/rides" className="text-gray-700 hover:text-primary transition-colors">
            Поездки
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Как это работает
          </Link>
          <Link to="/premium" className="text-gray-700 hover:text-primary transition-colors">
            Премиум
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {authState.isAuthenticated ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">{authState.user?.name}</span>
                </Button>
              </Link>
              <Button variant="outline" onClick={logout}>Выйти</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Вход</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary hover:bg-primary-dark">Регистрация</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
