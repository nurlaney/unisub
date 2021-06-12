import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./login.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./actions/loginActions";

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const payload = {
        ...values,
      };
      const dispatchAddOrder = addUser(dispatch);
      dispatchAddOrder(payload);
      history.push("/");
    },
  });
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-md-6">
        <motion.div
          className="form-wrapper"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
        >
          <motion.h4
            initial={{ fontSize: "18px", fontWeight: "bold" }}
            animate={{ fontSize: "25px", color: "#564154" }}
            transition={{ delay: 0.2, duration: "0.5" }}
            className="text-center"
          >
            Login
          </motion.h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
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
            <motion.button whileHover={{ skew: "1deg, 1deg" }} type="submit">
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
