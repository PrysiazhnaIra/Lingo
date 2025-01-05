import { useId, useState } from "react";
import css from "./Languages.module.css";

export default function Languages() {
  const selectId = useId();
  const [lang, setLang] = useState("French");

  return (
    <div className={css.langWrap}>
      <label htmlFor={selectId} className={css.label}>
        Languages
      </label>
      <select
        id={selectId}
        value={lang}
        onChange={(evt) => setLang(evt.target.value)}
        className={css.select}
      >
        <option value="fr" className={css.variant}>
          French
        </option>
        <option value="en" className={css.variant}>
          English
        </option>
        <option value="de" className={css.variant}>
          German
        </option>
        <option value="uk" className={css.variant}>
          Ukrainian
        </option>
        <option value="pl" className={css.variant}>
          Polish
        </option>
      </select>
    </div>
  );
}
