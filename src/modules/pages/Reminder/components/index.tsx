import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import "./index.scss";
import { SingleReminder } from "./SingleReminder";
import { ReminderForm } from "./ReminderForm";
import { ASYNC_STATUS } from "../../../../redux/consts";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    padding: "20px 30px",
    boxSizing: "border-box",
    borderRadius: "10px",
    background: "#1EAAE7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 15px 15px 0",
  },
});

export const Reminder: React.FC = () => {

  return (
    <></>
  );
  
};
