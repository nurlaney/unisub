import React, { useCallback } from "react";
import { FC } from "react";
import "./cardview.scss";
import { RiSettings6Line, RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { removeReminder } from "../../Reminder/actions";

export const HomeCard: FC = () => {
  const reminder = useSelector((state: RootState) => state.reminder);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (e: any) => {
      const payload = e.target.id;
      const dispatchRemoveOrder = removeReminder(dispatch);
      dispatchRemoveOrder(payload);
      document.location.reload();
    },
    [dispatch]
  );
  return (
    <motion.div
      className="row mt-5"
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
    >
      {reminder.status === "LOADING" ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loader type="Grid" color="#6f2232" height={150} width={150} />
        </div>
      ) : (
        reminder.data.map((rem) => (
          <div className="col-md-3 mt-3">
            <div className="cardView">
              <div className="exp-date">
                <p>{rem.expDate}</p>
              </div>
              <div className="platform">
                <label htmlFor="platform">Platform:</label>
                <p>{rem.platformName}</p>
              </div>
              <div className="price">
                <label htmlFor="price">Amount:</label>
                <p>{rem.price}</p>
              </div>
              <div className="actions">
                <RiSettings6Line
                  fontSize={20}
                  color={"#779fa1"}
                  cursor={"pointer"}
                  onClick={() => history.push(`/edit-reminder/${rem._id}`)}
                />
                <RiDeleteBin6Line
                  fontSize={20}
                  color={"red"}
                  cursor={"pointer"}
                  id={rem._id}
                  onClick={handleDelete}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </motion.div>
  );
};
