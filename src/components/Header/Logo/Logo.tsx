import { NavLink } from "react-router";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <NavLink to="/" className={css.logoBlock}>
        <div className={css.flag}></div>
        <p className={css.logoText}>LearnLingo</p>
      </NavLink>
    </>
  );
}
