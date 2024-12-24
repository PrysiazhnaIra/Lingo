import GoBackBtn from "../GoBackBtn/GoBackBtn.jsx";
import Header from "../Home/Header/Header.jsx";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.block}>
      <Header />
      <h2 className={css.title}>Page not found</h2>
      <GoBackBtn />
    </div>
  );
}
