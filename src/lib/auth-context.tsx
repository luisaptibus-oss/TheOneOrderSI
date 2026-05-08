import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  role?: "admin" | "client";
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock implementation for now since Firebase config is missing
  useEffect(() => {
    const savedUser = localStorage.getItem("theo_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, _pass: string) => {
    setLoading(true);
    // Simulate API call
    const mockUser: User = { 
      uid: "mock-uid", 
      email, 
      displayName: "Usuário Demo",
      role: email.includes("admin") ? "admin" : "client"
    };
    localStorage.setItem("theo_user", JSON.stringify(mockUser));
    setUser(mockUser);
    setLoading(false);
  };

  const logout = async () => {
    localStorage.removeItem("theo_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
