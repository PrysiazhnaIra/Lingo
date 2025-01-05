import { useId, useState } from "react";
import css from "./Price.module.css";

export default function Price() {
  const selectId = useId();
  const [price, setPrice] = useState("30 $");

  return (
    <div className={css.priceWrap}>
      <label htmlFor={selectId} className={css.label}>
        Price
      </label>
      <select
        id={selectId}
        value={price}
        onChange={(evt) => setPrice(evt.target.value)}
        className={css.select}
      >
        <option value="s" className={css.variant}>
          10 $
        </option>
        <option value="m" className={css.variant}>
          20 $
        </option>
        <option value="l" className={css.variant}>
          30 $
        </option>
        <option value="xl" className={css.variant}>
          40 $
        </option>
      </select>
    </div>
  );
}
