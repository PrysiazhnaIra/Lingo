import Logo from "./Logo/Logo.js";

import css from "./Header.module.css";
import NavToPages from "./NavToPages/NavToPages.js";
import NavToAuth from "./NavToAuth/NavToAuth.js";

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
