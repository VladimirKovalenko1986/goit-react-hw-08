import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("You are logged in with your account!");
      })
      .catch(() => {
        toast.error("Please check the entered data!");
      });
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field className={css.input} type="email" name="email" id={emailId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordId}
        />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
