
export interface Ride {
  id: string;
  driverId: string;
  driverName: string;
  origin: string;
  destination: string;
  departureTime: Date;
  availableSeats: number;
  pricePerSeat: number;
  passengers: string[];
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}
