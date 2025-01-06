import Header from "../../components/Header/Header.jsx";
import Statistics from "../../components/Statistics/Statistics.jsx";
import Welcome from "../../components/Welcome/Welcome.jsx";
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
