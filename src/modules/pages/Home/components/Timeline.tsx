import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { FC } from "react";
import { TimelineOppositeContent } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./timeline.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Loader from "react-loader-spinner";

export const HomeTimeline: FC = () => {
  const reminder = useSelector((state: RootState) => state.reminder);
  return (
    <motion.div initial={{ x: "-100vh" }} animate={{ x: 0 }} className="mt-5">
      <Timeline align="alternate">
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
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {rem.expDate}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{rem.platformName}</TimelineContent>
            </TimelineItem>
          ))
        )}
      </Timeline>
    </motion.div>
  );
};
