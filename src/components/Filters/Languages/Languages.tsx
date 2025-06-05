import { useId } from "react";
import css from "./Languages.module.css";

type LanguagesProps = {
  lang: string;
  onLangChange: (lang: string) => void;
};

export default function Languages({ lang, onLangChange }: LanguagesProps) {
  const selectId = useId();

  return (
    <div className={css.langWrap}>
      <label htmlFor={selectId} className={css.label}>
        Languages
      </label>
      <select
        id={selectId}
        value={lang}
        onChange={(evt) => onLangChange(evt.target.value)}
        className={css.select}
      >
        <option value="French" className={css.variant}>
          French
        </option>
        <option value="English" className={css.variant}>
          English
        </option>
        <option value="German" className={css.variant}>
          German
        </option>
        <option value="Ukrainian" className={css.variant}>
          Ukrainian
        </option>
        <option value="Polish" className={css.variant}>
          Polish
        </option>
      </select>
    </div>
  );
}
