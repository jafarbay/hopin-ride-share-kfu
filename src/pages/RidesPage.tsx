
import React, { useEffect, useState } from 'react';
import { useRides } from '@/contexts/RideContext';
import { useAuth } from '@/contexts/AuthContext';
import RideCard from '@/components/RideCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const RidesPage: React.FC = () => {
  const { availableRides, fetchRides } = useRides();
  const { authState } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    fetchRides();
  }, []);
  
  const filteredRides = availableRides.filter(ride => 
    ride.origin.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ride.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-8 mb-16 md:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Доступные поездки</h1>
        {authState.isAuthenticated && (
          <Link to="/create-ride">
            <Button>Создать поездку</Button>
          </Link>
        )}
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Поиск по месту отправления или прибытия..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {!authState.isAuthenticated && (
        <div className="bg-primary/10 p-6 rounded-lg mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-primary-dark">Войдите, чтобы забронировать поездку</h3>
            <p className="text-gray-600">
              Для бронирования поездки необходимо войти в систему
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="outline">Вход</Button>
            </Link>
            <Link to="/register">
              <Button>Регистрация</Button>
            </Link>
          </div>
        </div>
      )}
      
      {filteredRides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRides.map(ride => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <MapPin className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Нет доступных поездок
          </h2>
          <p className="text-gray-500 mb-6">
            {searchQuery 
              ? "Не найдено поездок, соответствующих вашему запросу"
              : "В данный момент нет доступных поездок. Проверьте позже или создайте свою поездку"
            }
          </p>
          {authState.isAuthenticated && !searchQuery && (
            <Link to="/create-ride">
              <Button>Создать поездку</Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default RidesPage;
