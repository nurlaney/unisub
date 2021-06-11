import { TextField } from "@material-ui/core";
import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { FC } from "react";
import * as Yup from "yup";

export const Register: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form-wrapper">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          type="text"
          name="firstName"
          id="standard-basic"
          label="First Name"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          type="text"
          name="lastName"
          id="standard-basic"
          label="Last Name"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type="email"
          name="email"
          id="standard-basic"
          label="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type="password"
          name="password"
          id="standard-basic"
          label="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirm}
          type="password"
          name="passwordConfirm"
          id="standard-basic"
          label="Password Confirm"
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
          <div>{formik.errors.passwordConfirm}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
