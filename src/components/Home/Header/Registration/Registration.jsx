import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import css from "./Registration.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import * as Yup from "yup";
import Modal from "react-modal";

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be at most 32 characters")
    .matches(/^[a-zA-Z0-9]*$/, "Name can contain only letters and numbers")
    .required("Name is required"),
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

export default function Registration({ isOpen, onClose }) {
  const initialValues = {
    name: "",
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
        <h2 className={css.title}>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={css.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
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
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
