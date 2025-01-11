import { useEffect, useState } from "react";
import { dataBase } from "../../config/firebase.js";
import {
  ref,
  get,
  query,
  limitToFirst,
  orderByChild,
  startAt,
  orderByKey,
} from "firebase/database";
import css from "./TeachersList.module.css";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";
import { toast, Toaster } from "react-hot-toast";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const dataRef = ref(dataBase, "teachers");
        const response = await get(
          query(
            dataRef,
            limitToFirst(itemsPerPage),
            startAt((page * itemsPerPage).toString()),
            orderByKey()
          )
        );
        if (response.exists()) {
          const data = response.val();
          console.log("Data: ", data);
          const teachersArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          // const teachersToDisplay = [...teachers, ...teachersArray]
          setTeachers((prevTeachers) => [...prevTeachers, ...teachersArray]);
          toast.success("The list of teachers has been uploaded! Enjoy!");
          setShowLoadMore(true);
        } else {
          toast.error("No data available");
          setShowLoadMore(false);
        }
      } catch (err) {
        toast.error("ERROR:" + err.message);
      }
    }

    fetchTeachers();
  }, [page]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage((prevPage) => prevPage + 1);
    setIsLoading(false);
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
