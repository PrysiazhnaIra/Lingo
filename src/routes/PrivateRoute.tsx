import { useState } from "react";

import css from "./PrivateRoute.module.css";
import { useAuth } from "../components/AuthProvider/AuthProvider.js";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn.js";
import Login from "../components/Header/Login/Login";

type PrivateRouteProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, loading, setIsAuthenticated } =
    useAuth() as AuthContextType;
  const [isLoginOpen, setIsLoginOpen] = useState(!isAuthenticated);

  if (loading) return <p>Loading...</p>;

  return isAuthenticated ? (
    children
  ) : (
    <div className={css.wrapper}>
      <div>You can not see the page. Please, log in.</div>
      <GoBackBtn />
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => {
          setIsAuthenticated(true);
          setIsLoginOpen(false);
        }}
      />
    </div>
  );
};

export default PrivateRoute;
