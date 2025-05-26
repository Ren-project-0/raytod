
"use client";

import type React from 'react';
import { createContext, useContext } from 'react';
import { useUser } from '@clerk/nextjs';
import type { UserResource } from '@clerk/types'; // Clerk's user type

interface AuthContextType {
  user: UserResource | null;
  isSignedIn: boolean | undefined; // From useUser
  isLoaded: boolean; // From useUser
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isSignedIn, isLoaded } = useUser(); // Use Clerk hook

  return (
    <AuthContext.Provider value={{ user: user || null, isSignedIn, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
