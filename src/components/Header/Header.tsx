import css from "./Header.module.css";
import Logo from "./Logo/Logo";
import NavToAuth from "./NavToAuth/NavToAuth.js";
import NavToPages from "./NavToPages/NavToPages.js";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={css.wrapper}>
          <li>
            <Logo />
          </li>
          <li className={css.navToPagesWrapper}>
            <NavToPages />
          </li>
          <li className={css.authBlock}>
            <NavToAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
}
