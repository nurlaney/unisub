import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { FC } from "react";
import "./speedDial.scss";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380,
      transform: "translateZ(0px)",
      flexGrow: 1,
      backgroundColor: "#779fa1",
    },
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    staticTooltipLabel: {
      backgroundColor: "gray",
      color: "white",
      fontSize: 14,
      width: 110,
    },
  })
);

interface IProps {
  handleTimelineView: () => void;
  handleViewTimeline: boolean;
}

export const SpeedDialComponent: FC<IProps> = ({
  handleTimelineView,
  handleViewTimeline,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={false}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        icon={"+"}
      >
        <SpeedDialAction
          key={"1"}
          tooltipTitle={handleViewTimeline ? "See as Card" : "See as Timeline"}
          onClick={handleTimelineView}
          tooltipOpen={true}
          classes={classes}
          icon={"set"}
        />
        <SpeedDialAction
          key={"12"}
          tooltipTitle={"Add Reminder"}
          onClick={() => history.push("/add-reminder")}
          tooltipOpen={true}
          classes={classes}
          icon={"add"}
        />
      </SpeedDial>
    </div>
  );
};
