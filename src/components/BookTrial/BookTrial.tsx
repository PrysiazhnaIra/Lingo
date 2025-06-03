import css from "./BookTrial.module.css";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";
import { db, collection, addDoc } from "../../config/firebase.js";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must have one "@" and a "."'
    )
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  checkboxes: Yup.array()
    .min(1, "Please select at least one option")
    .required("Please select at least one option"),
});

export default function BookTrial({ isOpen, onClose, name, surname, ava }) {
  const initialValues = {
    checkboxes: [],
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await addDoc(collection(db, "bookings"), {
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        checkboxes: values.checkboxes,
        date: new Date(),
      });
      toast.success("Booking is successful!");
      setSubmitting(false);
      resetForm();
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      toast.error("ERROR:" + err.message);
      console.log("my error book trial", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.wrapper}>
        <Toaster position="top-center" reverseOrder={false} />
        <IoMdClose className={css.closeIcon} onClick={onClose} />
        <h2 className={css.mainTitle}>Book trial lesson</h2>
        <p className={css.info}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacherWrap}>
          <div className={css.photoWrap}>
            {isImageError || !ava ? (
              <FaUser className={css.icon} />
            ) : (
              <img
                src={ava}
                alt={`${name} ${surname}`}
                className={css.teacherPhoto}
                onError={handleImageError}
              />
            )}
          </div>
          <div className={css.teacherTextWrap}>
            <p className={css.teacherText}>Your teacher</p>
            <p className={css.teacherName}>{name + " " + surname}</p>
          </div>
        </div>
        <h3 className={css.questionTitle}>
          What is your main reason for learning English?
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.from}>
              <div className={css.checkboxes}>
                <label>
                  <Field type="checkbox" name="checkboxes" value="Option1" />
                  Career and business
                </label>
                <label>
                  <Field type="checkbox" name="checkboxes" value="Option2" />
                  Lesson for kids
                </label>
                <label>
                  <Field type="checkbox" name="checkboxes" value="Option3" />
                  Living abroad
                </label>
                <label>
                  <Field type="checkbox" name="checkboxes" value="Option4" />
                  Exams and coursework
                </label>
                <label>
                  <Field type="checkbox" name="checkboxes" value="Option5" />
                  Culture, travel or hobby
                </label>
              </div>

              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                className={css.input}
              />
              <ErrorMessage
                name="fullName"
                component="span"
                className={css.error}
              />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />

              <Field
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                className={css.input}
              />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className={css.error}
              />

              <button type="submit" className={css.btnBook}>
                {isSubmitting ? "Submitting..." : "Book"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
