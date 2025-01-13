import { useId } from "react";
import css from "./Level.module.css";

export default function Level({ level, onLevelChange }) {
  const selectId = useId();

  return (
    <div className={css.levelWrap}>
      <label htmlFor={selectId} className={css.label}>
        Level of knowledge
      </label>
      <select
        id={selectId}
        value={level}
        onChange={(evt) => onLevelChange(evt.target.value)}
        className={css.select}
      >
        <option value="A1 Beginner" className={css.variant}>
          A1 Beginner
        </option>
        <option value="A2 Elementary" className={css.variant}>
          A2 Elementary
        </option>
        <option value="B1 Intermediate" className={css.variant}>
          B1 Intermediate
        </option>
        <option value="B2 Upper-Intermediate" className={css.variant}>
          B2 Upper-Intermediate
        </option>
      </select>
    </div>
  );
}
