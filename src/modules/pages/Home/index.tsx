import React from "react";
import { HomeTimeline } from "./components/Timeline";
import { FC } from "react";
import { HomeCard } from "./components/CardView";

interface IProps {
  timelineView: boolean;
}

export const Home: FC<IProps> = ({ timelineView }) => {
  return <div>{timelineView === true ? <HomeTimeline /> : <HomeCard />}</div>;
};
