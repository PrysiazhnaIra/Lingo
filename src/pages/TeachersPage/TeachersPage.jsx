import Filters from "../../components/Filters/Filters.jsx";
import TeachersList from "../../components/TeachersList/TeachersList.jsx";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.jsx";
import css from "./TeachersPage.module.css";

export default function Teachers() {
  return (
    <div className={css.wrapper}>
      <Filters />
      <ul>
        <TeachersList />
      </ul>
      <div className={css.btnBlock}>
        <GoBackBtn />
      </div>
    </div>
  );
}
