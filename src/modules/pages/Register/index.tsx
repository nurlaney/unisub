import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { FC } from "react";
import * as Yup from "yup";
import { registerService } from "./service";
import { motion } from "framer-motion";
import "../Login/login.scss";
import { useHistory } from "react-router-dom";

export const Register: FC = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      registerService.register(values).then(() => {
        history.push("/login");
      });
    },
  });
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-md-6">
        <motion.div
          className="form-wrapper"
          initial={{ x: "-100vh", originX: 0 }}
          animate={{ x: 0, originX: 0 }}
        >
          <motion.h4
            initial={{ fontSize: "18px", fontWeight: "bold" }}
            animate={{ fontSize: "25px", color: "#564154" }}
            transition={{ delay: 0.2, duration: "0.5" }}
            className="text-center"
          >
            Register
          </motion.h4>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              name="name"
              id="name"
              label="First Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger mt-2">{formik.errors.name}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              type="text"
              name="surname"
              id="surname"
              label="Last Name"
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="text-danger mt-2">{formik.errors.surname}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              type="username"
              name="username"
              id="username"
              label="Username"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger mt-2">{formik.errors.username}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              label="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger mt-2">{formik.errors.email}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              name="password"
              id="password"
              label="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger mt-2">{formik.errors.password}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              type="password"
              name="passwordConfirm"
              id="password-confirm"
              label="Password Confirm"
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div className="text-danger mt-2">
                {formik.errors.passwordConfirm}
              </div>
            ) : null}

            <motion.button whileHover={{ skew: "1deg, 1deg" }} type="submit">
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
