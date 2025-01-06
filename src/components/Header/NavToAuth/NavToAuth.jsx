import { FiLogIn } from "react-icons/fi";
import css from "./NavToAuth.module.css";
import { useEffect, useState } from "react";
import Registration from "../Registration/Registration.jsx";
import Login from "../Login/Login.jsx";
import Logout from "../../Logout/Logout.jsx";

import { auth } from "../../../config/firebase.js";

export default function NavToAuth() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

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
