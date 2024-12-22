import icons from "../../../public/icons.svg";
import css from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <div>
      <svg className={css.logo} width="28" height="28">
        <use href={`${icons}#icon-ukr`} />
      </svg>
      <p>LearnLingo</p>
    </div>
  );
}
