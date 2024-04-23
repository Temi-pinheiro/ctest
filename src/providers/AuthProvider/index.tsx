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
      token: {
        token: string;
      };
    };
    setUser: (v: any) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (v: boolean) => void;
  }>(AuthContext);
};
const token = JSON.parse(localStorage.getItem('cowas_token') || '');
const storedUser = JSON.parse(localStorage.getItem('cowas_user') || '{}');

export const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = useState({ ...storedUser });
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

  const authHooks = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  };
  return (
    <AuthContext.Provider value={authHooks}>{children}</AuthContext.Provider>
  );
};
