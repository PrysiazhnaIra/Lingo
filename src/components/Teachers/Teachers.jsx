import Filters from "../Filters/Filters.jsx";
import GoBackBtn from "../GoBackBtn/GoBackBtn.jsx";
import Teacher from "./Teacher/Teacher.jsx";
import css from "./Teachers.module.css";

export default function Teachers() {
  const handleMore = () => {};
  return (
    <div className={css.wrapper}>
      <Filters />
      <ul>
        <Teacher />
      </ul>
      <div className={css.btns}>
        <button type="button" onClick={handleMore} className={css.btn}>
          Load more
        </button>
        <GoBackBtn />
      </div>
    </div>
  );
}
