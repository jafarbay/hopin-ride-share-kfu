
import { User } from "../types/user";
import { Ride } from "../types/ride";

// Mock user data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Алексей Иванов",
    email: "alex@kfu.ru",
    profilePicture: "/placeholder.svg",
    university: "КФУ",
    isPremium: true,
  },
  {
    id: "2",
    name: "Мария Смирнова",
    email: "maria@kfu.ru",
    profilePicture: "/placeholder.svg",
    university: "КФУ",
    isPremium: false,
  },
  {
    id: "3",
    name: "Дмитрий Козлов",
    email: "dmitriy@kfu.ru",
    profilePicture: "/placeholder.svg",
    university: "КФУ",
    isPremium: false,
  },
];

// Mock ride data
export const mockRides: Ride[] = [
  {
    id: "1",
    driverId: "1",
    driverName: "Алексей Иванов",
    origin: "ул. Пушкина, 15",
    destination: "КФУ, Главное здание",
    departureTime: new Date(2025, 4, 9, 8, 30),
    availableSeats: 3,
    pricePerSeat: 120,
    passengers: [],
    status: "scheduled",
  },
  {
    id: "2",
    driverId: "2",
    driverName: "Мария Смирнова",
    origin: "ул. Гагарина, 27",
    destination: "КФУ, Институт физики",
    departureTime: new Date(2025, 4, 9, 9, 15),
    availableSeats: 2,
    pricePerSeat: 150,
    passengers: ["3"],
    status: "scheduled",
  },
  {
    id: "3",
    driverId: "3",
    driverName: "Дмитрий Козлов",
    origin: "ул. Кремлёвская, 5",
    destination: "КФУ, Институт экономики",
    departureTime: new Date(2025, 4, 9, 10, 0),
    availableSeats: 3,
    pricePerSeat: 100,
    passengers: ["1", "2"],
    status: "scheduled",
  },
];

// Helper functions to simulate backend operations
export const getAvailableRides = () => {
  return mockRides.filter(ride => 
    ride.status === "scheduled" && 
    ride.availableSeats > ride.passengers.length
  );
};

export const getRideById = (id: string) => {
  return mockRides.find(ride => ride.id === id);
};

export const getUserById = (id: string) => {
  return mockUsers.find(user => user.id === id);
};

export const authenticateUser = (email: string, password: string) => {
  // Simple mock authentication
  const user = mockUsers.find(user => user.email === email);
  
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: "Invalid credentials" };
  }
};

export const bookRide = (rideId: string, userId: string) => {
  const ride = mockRides.find(ride => ride.id === rideId);
  
  if (!ride) {
    return { success: false, message: "Ride not found" };
  }
  
  if (ride.availableSeats <= ride.passengers.length) {
    return { success: false, message: "No available seats" };
  }
  
  ride.passengers.push(userId);
  
  return { success: true, ride };
};
