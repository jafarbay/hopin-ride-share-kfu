
import React from 'react';
import { Ride } from '@/types/ride';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, MapPin, Clock, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useAuth } from '@/contexts/AuthContext';
import { useRides } from '@/contexts/RideContext';

interface RideCardProps {
  ride: Ride;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const { authState } = useAuth();
  const { bookUserRide } = useRides();
  
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  const remainingSeats = ride.availableSeats - ride.passengers.length;
  const isUserBooked = authState.user && ride.passengers.includes(authState.user.id);
  const isPremiumPrice = authState.user?.isPremium ? Math.floor(ride.pricePerSeat * 0.8) : ride.pricePerSeat;
  
  const handleBooking = () => {
    if (!authState.user) return;
    bookUserRide(ride.id, authState.user.id);
  };
  
  return (
    <Card className="w-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{ride.origin} → {ride.destination}</CardTitle>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">
              {formatTime(ride.departureTime)}
            </span>
          </div>
        </div>
        <CardDescription className="flex items-center">
          <span className="flex items-center text-sm">
            <MapPin className="h-4 w-4 text-gray-500 mr-1" />
            {formatDistanceToNow(ride.departureTime, { addSuffix: true, locale: ru })}
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Car className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{ride.driverName}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{remainingSeats} из {ride.availableSeats} мест</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Цена за место:</span>
          <div className="flex items-center">
            <span className="font-bold text-primary text-lg">{isPremiumPrice} ₽</span>
            {authState.user?.isPremium && (
              <span className="ml-2 text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full">
                Премиум -20%
              </span>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleBooking} 
          disabled={isUserBooked || !authState.isAuthenticated || remainingSeats <= 0}
          variant={isUserBooked ? "outline" : "default"}
          className={isUserBooked ? "pointer-events-none" : ""}
        >
          {isUserBooked ? 'Забронировано' : remainingSeats <= 0 ? 'Нет мест' : 'Забронировать'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RideCard;
