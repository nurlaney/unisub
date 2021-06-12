import React from "react";
import { FC } from "react";
import "./cardview.scss";
import { RiSettings6Line, RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

export const HomeCard: FC = () => {
  const [buttonShow, setButtonShow] = useState(false);

  return (
    <motion.div
      className="row mt-5"
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
    >
      <div className="col-md-3">
        <div
          className="cardView"
          onMouseOver={() => setButtonShow(true)}
          onMouseLeave={() => setButtonShow(false)}
        >
          <div className="exp-date">
            <p>10/07/2020</p>
          </div>
          <div className="platform">
            <label htmlFor="platform">Platform:</label>
            <p>Netflix</p>
          </div>
          <div className="price">
            <label htmlFor="price">Amount:</label>
            <p>22$</p>
          </div>
          <div className="actions">
            <RiSettings6Line
              fontSize={20}
              color={"#779fa1"}
              visibility={buttonShow ? "" : "hidden"}
              cursor={"pointer"}
            />
            <RiDeleteBin6Line
              fontSize={20}
              color={"red"}
              visibility={buttonShow ? "" : "hidden"}
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div
          className="cardView"
          onMouseOver={() => setButtonShow(true)}
          onMouseLeave={() => setButtonShow(false)}
        >
          <div className="exp-date">
            <p>10/07/2020</p>
          </div>
          <div className="platform">
            <label htmlFor="platform">Platform:</label>
            <p>Netflix</p>
          </div>
          <div className="price">
            <label htmlFor="price">Amount:</label>
            <p>22$</p>
          </div>
          <div className="actions">
            <RiSettings6Line
              fontSize={20}
              color={"#779fa1"}
              visibility={buttonShow ? "" : "hidden"}
              cursor={"pointer"}
            />
            <RiDeleteBin6Line
              fontSize={20}
              color={"red"}
              visibility={buttonShow ? "" : "hidden"}
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
