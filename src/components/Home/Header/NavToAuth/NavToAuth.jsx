import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import css from "./NavToAuth.module.css";

export default function NavToAuth() {
  return (
    <>
      <NavLink to="/login" className={css.loginLink}>
        <FiLogIn className={css.icon} />
        Log in
      </NavLink>
      <NavLink to="/register" className={css.registerLink}>
        Registration
      </NavLink>
    </>
  );
}
