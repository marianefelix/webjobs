import { createContext, ReactNode, useState } from 'react';

interface User {
  id: string;
  companyName: string;
  logoUrl: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
