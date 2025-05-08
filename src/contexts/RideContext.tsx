
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Ride } from '../types/ride';
import { getAvailableRides, bookRide, getRideById } from '../services/mockData';
import { useToast } from '@/components/ui/use-toast';

interface RideContextProps {
  availableRides: Ride[];
  fetchRides: () => void;
  bookUserRide: (rideId: string, userId: string) => boolean;
  getRide: (rideId: string) => Ride | undefined;
}

const RideContext = createContext<RideContextProps | undefined>(undefined);

export const RideProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [availableRides, setAvailableRides] = useState<Ride[]>([]);
  const { toast } = useToast();

  const fetchRides = () => {
    const rides = getAvailableRides();
    setAvailableRides(rides);
  };

  const bookUserRide = (rideId: string, userId: string) => {
    const result = bookRide(rideId, userId);
    
    if (result.success) {
      toast({
        title: "Поездка забронирована",
        description: "Вы успешно забронировали поездку",
      });
      fetchRides(); // Refresh rides list
      return true;
    } else {
      toast({
        title: "Ошибка бронирования",
        description: result.message,
        variant: "destructive",
      });
      return false;
    }
  };

  const getRide = (rideId: string) => {
    return getRideById(rideId);
  };

  return (
    <RideContext.Provider value={{ availableRides, fetchRides, bookUserRide, getRide }}>
      {children}
    </RideContext.Provider>
  );
};

export const useRides = () => {
  const context = useContext(RideContext);
  if (context === undefined) {
    throw new Error('useRides must be used within a RideProvider');
  }
  return context;
};
