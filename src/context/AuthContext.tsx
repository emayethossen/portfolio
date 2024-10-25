// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  login: (email: string, password: string) => void;
  logout: () => void;
  isAdmin: boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize isAdmin state from localStorage directly
  const storedAdminStatus = localStorage.getItem('isAdmin');
  const [isAdmin, setIsAdmin] = useState<boolean>(storedAdminStatus === 'true');

  const login = (email: string, password: string) => {
    if (email === 'admin@example.com' && password === 'password') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true'); // Store in localStorage
      console.log('Login successful, admin status set to true.');
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin'); // Remove from localStorage
    console.log('Logged out, admin status set to false.');
  };

  console.log('Current Admin Status:', isAdmin); // Log the current admin status

  return (
    <AuthContext.Provider value={{ login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
