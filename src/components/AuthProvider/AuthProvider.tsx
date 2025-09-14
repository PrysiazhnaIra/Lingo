import { createContext, useContext, useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import { auth } from "../../config/firebase";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  loading: boolean;
  user: any;
};

const AuthContext = createContext<AuthContextType | any>(null);
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, user }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
