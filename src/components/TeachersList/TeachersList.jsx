import { useEffect, useState } from "react";
import { dataBase } from "../../config/firebase.js";
import { ref, get } from "firebase/database";
import css from "./TeachersList.jsx";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";
import { toast, Toaster } from "react-hot-toast";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const dataRef = ref(dataBase, "teachers");
        const response = await get(dataRef);
        if (response.exists()) {
          const data = response.val();
          const teachersArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTeachers(teachersArray);
          console.log("MyARRAY:", teachersArray);
        } else {
          console.log("No data available");
        }
      } catch (err) {
        console.error("Error fetching teachers: ", err);
      }
    }

    fetchTeachers();
  }, []);

  return (
    <ul className={css.list}>
      <Toaster position="top-center" reverseOrder={false} />
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
}
