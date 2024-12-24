import css from "./Statistics.module.css";

export default function Statistics() {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.elem}>
          <p className={css.number}>32,000 +</p>
          <p className={css.text}>Experienced tutors</p>
        </li>
        <li className={css.elem}>
          <p className={css.number}>300,000 +</p>
          <p className={css.text}>5-star tutor reviews</p>
        </li>
        <li className={css.elem}>
          <p className={css.number}>120 +</p>
          <p className={css.text}>Subjects taught</p>
        </li>
        <li className={css.elem}>
          <p className={css.number}>200 +</p>
          <p className={css.text}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
