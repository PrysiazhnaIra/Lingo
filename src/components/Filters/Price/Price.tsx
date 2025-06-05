import { useId } from "react";
import css from "./Price.module.css";

type PriceProps = {
  price: number;
  onPriceChange: (price: number) => void;
};

export default function Price({ price, onPriceChange }: PriceProps) {
  const selectId = useId();

  return (
    <div className={css.priceWrap}>
      <label htmlFor={selectId} className={css.label}>
        Price
      </label>
      <select
        id={selectId}
        value={price}
        onChange={(evt) => onPriceChange(Number.parseInt(evt.target.value))}
        className={css.select}
      >
        <option value="10" className={css.variant}>
          10 $
        </option>
        <option value="20" className={css.variant}>
          20 $
        </option>
        <option value="30" className={css.variant}>
          30 $
        </option>
        <option value="40" className={css.variant}>
          40 $
        </option>
      </select>
    </div>
  );
}
