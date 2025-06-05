import Languages from "./Languages/Languages.js";
import Level from "./Level/Level.js";
import Price from "./Price/Price.js";
import css from "./Filters.module.css";

type FiltersProps = {
  lang: string;
  onLangChange: (lang: string) => void;
  level: string;
  onLevelChange: (level: string) => void;
  price: number;
  onPriceChange: (price: number) => void;
};

export default function Filters({
  lang,
  onLangChange,
  level,
  onLevelChange,
  price,
  onPriceChange,
}: FiltersProps) {
  return (
    <ul className={css.list}>
      <li>
        <Languages lang={lang} onLangChange={onLangChange} />
      </li>
      <li>
        <Level level={level} onLevelChange={onLevelChange} />
      </li>
      <li>
        <Price price={price} onPriceChange={onPriceChange} />
      </li>
    </ul>
  );
}
