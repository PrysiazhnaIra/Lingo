import { useAuth } from "../../components/AuthProvider/AuthProvider.jsx";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.jsx";
import TeacherCard from "../../components/TeachersList/TeacherCard/TeacherCard.jsx";
import css from "./FavoritesPage.module.css";
import { useState } from "react";

export default function FavoritesPage() {
  const { user } = useAuth();
  const [favorites] = useState(
    JSON.parse(localStorage.getItem(user.uid)) || []
  );

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {favorites.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </ul>
      <GoBackBtn />
    </div>
  );
}
