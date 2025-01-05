import Languages from "./Languages/Languages.jsx";
import Level from "./Level/Level.jsx";
import Price from "./Price/Price.jsx";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <ul className={css.list}>
      <li>
        <Languages />
      </li>
      <li>
        <Level />
      </li>
      <li>
        <Price />
      </li>
    </ul>
  );
}
