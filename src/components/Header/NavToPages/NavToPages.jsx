import { NavLink } from "react-router-dom";
import css from "./NavToPages.module.css";

export default function NavToPages() {
  return (
    <>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={css.link}>
        Teachers
      </NavLink>
    </>
  );
}
