import { useId, useState } from "react";
import css from "./Level.module.css";

export default function Level() {
  const selectId = useId();
  const [level, setLevel] = useState("A1 Beginner");

  return (
    <div className={css.levelWrap}>
      <label htmlFor={selectId} className={css.label}>
        Level of knowledge
      </label>
      <select
        id={selectId}
        value={level}
        onChange={(evt) => setLevel(evt.target.value)}
        className={css.select}
      >
        <option value="a1" className={css.variant}>
          A1 Beginner
        </option>
        <option value="a2" className={css.variant}>
          A2 Elementary
        </option>
        <option value="b1" className={css.variant}>
          B1 Intermediate
        </option>
        <option value="b2" className={css.variant}>
          B2 Upper-Intermediate
        </option>
      </select>
    </div>
  );
}
