import BookTrial from "../BookTrial/BookTrial.jsx";
import css from "./Teacher.module.css";
import { useState } from "react";

export default function Teacher() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={css.card}>
      <p>Info about a teacher...</p>
      <button onClick={handleOpenModal}>Book trial lesson</button>

      {isModalOpen && (
        <BookTrial
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          name="Teacher Name"
        />
      )}
    </li>
  );
}
