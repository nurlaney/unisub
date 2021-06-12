import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { TextField } from "@material-ui/core";

export const AddReminder = () => {
  const formik = useFormik({
    initialValues: {
      platformName: "",
      endDate: "",
      price: "",
    },
    validationSchema: Yup.object({
      platformName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      endDate: Yup.date(),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
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
            Add Reminder
          </motion.h4>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.platformName}
              type="text"
              name="platformName"
              id="platformName"
              label="Platform Name"
            />
            {formik.touched.platformName && formik.errors.platformName ? (
              <div className="text-danger mt-2">
                {formik.errors.platformName}
              </div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endDate}
              id="endDate"
              label="Exp. Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.touched.endDate && formik.errors.endDate ? (
              <div className="text-danger mt-2">{formik.errors.endDate}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              type="number"
              name="price"
              id="price"
              label="Price"
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-danger mt-2">{formik.errors.price}</div>
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
