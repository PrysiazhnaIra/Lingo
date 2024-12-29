import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import css from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import * as Yup from "yup";
import Modal from "react-modal";

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must have one "@" and a "."'
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .matches(/^[^\s]*$/, "Password should not contain spaces")
    .required("Password is required"),
});

export default function Login({ isOpen, onClose }) {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async () => {};

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.wrapper}>
        <IoMdClose className={css.closeIcon} onClick={onClose} />
        <h2 className={css.title}>Login</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          className={css.formWrap}
        >
          <Form className={css.form}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" className={css.error} />

            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={css.input}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.iconBtn}
            >
              {showPassword ? (
                <FaRegEye className={css.openEye} />
              ) : (
                <FaRegEyeSlash className={css.closedEye} />
              )}
            </button>
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />

            <button type="submit" className={css.btnSubmit}>
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
