import { FiLogIn } from "react-icons/fi";
import css from "./NavToAuth.module.css";
import { useState } from "react";
import Registration from "../Registration/Registration.js";
import Login from "../Login/Login.js";
import Logout from "../../Logout/Logout.js";
import { useAuth } from "../../AuthProvider/AuthProvider.js";

export default function NavToAuth() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
  };

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          <button
            className={css.loginLink}
            onClick={() => setIsLoginOpen(true)}
          >
            <FiLogIn className={css.icon} />
            Log in
          </button>
          <button
            className={css.registerLink}
            onClick={() => setIsRegisterOpen(true)}
          >
            Registration
          </button>
        </>
      ) : (
        <Logout onLogout={handleLogout} />
      )}

      {isLoginOpen && (
        <Login
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {isRegisterOpen && (
        <Registration
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
    </>
  );
}
