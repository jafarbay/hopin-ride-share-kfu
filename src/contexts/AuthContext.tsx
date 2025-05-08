
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AuthState, User } from '../types/user';
import { authenticateUser, getUserById } from '../services/mockData';
import { useToast } from '@/components/ui/use-toast';

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  const { toast } = useToast();

  const login = async (email: string, password: string) => {
    try {
      const result = authenticateUser(email, password);
      
      if (result.success) {
        setAuthState({
          user: result.user,
          isAuthenticated: true,
        });
        toast({
          title: "Успешный вход",
          description: `Добро пожаловать, ${result.user.name}!`,
        });
        return true;
      } else {
        toast({
          title: "Ошибка входа",
          description: "Неверный email или пароль",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Что-то пошло не так",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
