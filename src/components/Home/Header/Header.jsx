import Logo from "./Logo/Logo.jsx";

import css from "./Header.module.css";
import NavToPages from "./NavToPages/NavToPages.jsx";
import NavToAuth from "./NavToAuth/NavToAuth.jsx";

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
