import Login from "../components/Header/Login/Login.js";
import { useState } from "react";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn.js";
import { useAuth } from "../components/AuthProvider/AuthProvider.js";
import css from "./PrivateRoute.module.css";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading, setIsAuthenticated } = useAuth();
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
