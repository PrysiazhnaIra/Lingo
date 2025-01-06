import Filters from "../../components/Filters/Filters.jsx";
import Teacher from "../../components/Teacher/Teacher.jsx";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.jsx";
import css from "./TeachersPage.module.css";

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
