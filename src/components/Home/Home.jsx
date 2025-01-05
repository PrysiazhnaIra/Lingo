import Header from "./Header/Header.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.homeWrap}>
      <Header />
      <Welcome />
      <Statistics />
    </div>
  );
}
