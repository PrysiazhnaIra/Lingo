import { useState } from "react";
import css from "./TeacherCard.module.css";
import BookTrial from "../../BookTrial/BookTrial.jsx";
import { FaUser } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function TeacherCard({ teacher }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageError = () => {
    setIsImageError(true);
  };

  const handleTeacherDetails = () => {
    setIsReadMore(true);
  };

  return (
    <li className={css.card}>
      <div className={css.photoWrap}>
        {isImageError || !teacher.avatar_url ? (
          <FaUser className={css.icon} />
        ) : (
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className={css.teacherPhoto}
            onError={handleImageError}
          />
        )}
      </div>

      <div className={css.infoWrap}>
        <div className={css.topWrap}>
          <p className={css.text}>Languages</p>
          <div className={css.listWrap}>
            <ul className={css.topList}>
              <li>
                <FiBookOpen className={css.bookIcon} />
                Lessons online
              </li>
              <li className={css.separator}></li>
              <li>Lessons done: {teacher.lessons_done}</li>
              <li className={css.separator}></li>
              <li>
                <FaStar className={css.starIcon} />
                Rating: {teacher.rating}
              </li>
              <li className={css.separator}></li>
              <li>
                Price / 1 hour:{" "}
                <span className={css.price}>{teacher.price_per_hour} $</span>
              </li>
            </ul>
            <FaRegHeart className={css.heart} />
          </div>
        </div>
        <h3 className={css.nameTitle}>
          {teacher.name} {teacher.surname}
        </h3>

        <ul className={css.extraList}>
          <li className={css.extraItem}>
            Speaks:{" "}
            <span className={`${css.extraInfo} ${css.speaks}`}>
              {teacher.languages.join(", ")}
            </span>
          </li>
          <li className={css.extraItem}>
            Lesson Info:{" "}
            <span className={css.extraInfo}>{teacher.lesson_info}</span>
          </li>
          <li className={css.extraItem}>
            Conditions:{" "}
            <span className={css.extraInfo}>
              {teacher.conditions.join(" ")}
            </span>
          </li>
        </ul>

        {!isReadMore && (
          <button onClick={handleTeacherDetails} className={css.teacherDetails}>
            Read more
          </button>
        )}

        {isReadMore && (
          <>
            <p className={css.experience}>{teacher.experience}</p>

            <div className={css.feedbackWrap}>
              {teacher.reviews && teacher.reviews.length > 0 ? (
                <ul className={css.feedbackTop}>
                  {teacher.reviews.map((review, index) => (
                    <li key={index} className={css.reviewItem}>
                      <div className={css.topReviewWrap}>
                        <d iv className={css.photoFeedback}>
                          <FaUser className={css.iconFeedback} />
                        </d>
                        <div className={css.reviewHeader}>
                          <span className={css.reviewerName}>
                            {review.reviewer_name}
                          </span>
                          <div className={css.markBlock}>
                            <FaStar className={css.starIcon} />
                            <span className={css.reviewerRating}>
                              {review.reviewer_rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className={css.comment}>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          </>
        )}

        <ul className={css.levelList}>
          {teacher.levels.map((level, index) => (
            <li key={index} className={css.levelItem}>
              {level}
            </li>
          ))}
        </ul>

        <button onClick={handleOpenModal} className={css.bookBtn}>
          Book trial lesson
        </button>

        {isModalOpen && (
          <BookTrial
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            name={teacher.name}
            surname={teacher.surname}
            ava={teacher.avatar_url}
          />
        )}
      </div>
    </li>
  );
}
