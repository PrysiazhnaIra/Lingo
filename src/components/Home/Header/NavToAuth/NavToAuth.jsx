import { FiLogIn } from "react-icons/fi";
import css from "./NavToAuth.module.css";
import { useState } from "react";
import Registration from "../Registration/Registration.jsx";
import Login from "../Login/Login.jsx";

export default function NavToAuth() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <button className={css.loginLink} onClick={() => setIsLoginOpen(true)}>
        <FiLogIn className={css.icon} />
        Log in
      </button>
      <button
        className={css.registerLink}
        onClick={() => setIsRegisterOpen(true)}
      >
        Registration
      </button>

      {isLoginOpen && (
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      )}

      {isRegisterOpen && (
        <Registration
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </>
  );
}
