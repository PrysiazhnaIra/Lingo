import Filters from "../../components/Filters/Filters.js";
import TeachersList from "../../components/TeachersList/TeachersList.js";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.js";
import css from "./TeachersPage.module.css";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Teachers() {
  const [lang, setLang] = useState("French");
  const [level, setLevel] = useState("A1 Beginner");
  const [price, setPrice] = useState(30);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/favorites");
  };

  return (
    <div className={css.wrapper}>
      <button className={css.favoritesBtn} onClick={handleRedirect}>
        Go to <FaRegHeart className={css.heart} /> teachers
      </button>
      <Filters
        language={lang}
        onLangChange={setLang}
        level={level}
        onLevelChange={setLevel}
        price={price}
        onPriceChange={setPrice}
      />

      <TeachersList language={lang} level={level} price={price} />
      <div className={css.btnBlock}>
        <GoBackBtn />
      </div>
    </div>
  );
}
