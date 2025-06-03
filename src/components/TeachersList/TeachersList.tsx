import { useEffect, useState } from "react";
import { db } from "../../config/firebase.js";
import css from "./TeachersList.module.css";
import TeacherCard from "./TeacherCard/TeacherCard.js";
import { toast, Toaster } from "react-hot-toast";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore";

export default function TeachersList({ language, level, price }) {
  const [teachers, setTeachers] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;
  const [showLoadMore, setShowLoadMore] = useState(false);

  const fetchTeachers = async (reset) => {
    try {
      setIsLoading(true);
      const dataRef = collection(db, "teachers");
      let teachersQuery = query(
        dataRef,
        where("languages", "array-contains", language),
        where("price_per_hour", "<=", price),
        limit(itemsPerPage)
      );

      if (!reset && lastVisible) {
        teachersQuery = query(teachersQuery, startAfter(lastVisible));
      }
      const response = await getDocs(teachersQuery);

      setLastVisible(
        !response.empty ? response.docs[response.docs.length - 1] : null
      );

      let teachersArray = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      teachersArray = teachersArray.filter((teacher) =>
        teacher.levels.includes(level)
      );

      if (!reset) {
        setTeachers((prevTeachers) => [...prevTeachers, ...teachersArray]);
      } else {
        setTeachers(teachersArray);
      }

      if (teachersArray.length) {
        toast.success("The list of teachers has been uploaded! Enjoy!");
        setShowLoadMore(true);
      } else {
        toast.error("No data available");
        setShowLoadMore(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("ERROR:" + err.message);
      console.log("my error teachers list", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers(true);
  }, [language, level, price]);

  const handleLoadMore = () => {
    fetchTeachers(false);
  };

  return (
    <div>
      <ul className={css.list}>
        <Toaster position="top-center" reverseOrder={false} />
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </ul>
      {showLoadMore && teachers.length && (
        <div className={css.btnWrap}>
          <button
            type="button"
            onClick={handleLoadMore}
            className={css.loadMoreBtn}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
