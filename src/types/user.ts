
export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  university: string;
  isPremium: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
