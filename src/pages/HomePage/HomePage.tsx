import Header from "../../components/Header/Header.js";
import Statistics from "../../components/Statistics/Statistics.js";
import Welcome from "../../components/Welcome/Welcome.js";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeWrap}>
      <Header />
      <Welcome />
      <Statistics />
    </div>
  );
}
