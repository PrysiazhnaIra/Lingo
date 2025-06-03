import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.js";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.block}>
      <h2 className={css.title}>Page not found</h2>
      <GoBackBtn />
    </div>
  );
}
