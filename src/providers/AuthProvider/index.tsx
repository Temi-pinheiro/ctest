/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react';

const AuthContext = createContext<any>({});

interface AuthProvider {
  children: ReactNode;
}

export const useAuth = () => {
  return useContext<{
    user: {
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      phone_number: string;
      role: {
        id: string;
        title: string;
        slug: string;
      };
    };

    setUser: (v: any) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (v: boolean) => void;
    clearAuth: () => void;
  }>(AuthContext);
};
const token = JSON.parse(localStorage.getItem('cowas_token') || 'null');
const storedUser = JSON.parse(localStorage.getItem('cowas_user') || '{}');

export const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = useState({ ...storedUser });
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));
  const clearAuth = () => {
    setUser(null), setIsAuthenticated(false);
    localStorage.removeItem('cowas_user');
    localStorage.removeItem('cowas_token');
  };
  const authHooks = {
    user,
    setUser,
    isAuthenticated,
    clearAuth,
    setIsAuthenticated,
  };
  return (
    <AuthContext.Provider value={authHooks}>{children}</AuthContext.Provider>
  );
};
