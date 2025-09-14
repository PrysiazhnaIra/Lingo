import block from "../../../public/block.jpg";
import css from "./Welcome.module.css";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  return (
    <section className={css.welcome}>
      <div className={css.info}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span className={css.peaceOfTitle}>language</span> tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers">
          <button type="button" className={css.btn}>
            Get started
          </button>
        </NavLink>
      </div>
      <div className={css.decor}>
        <img src={block} alt="Happy student" className={`${css.image}`} />
      </div>
    </section>
  );
}
