import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    display: "flex",
    flexDirection: "column",
    width: "45vw",
    height: "100%",
    position: "relative",
    zIndex: "0",
    backgroundImage: "url(../assets/bg-img.png)",
    backgroundSize: "cover",
    "&:before": {
      display: "block",
      height: "100%",
      width: "100%",
      position: "absolute",
      content: "''",
      mixBlendMode: "normal",
      background:
        "linear-gradient(to bottom, rgba(58, 141, 255) 0%,rgba(134, 185, 255) 100%)",
      opacity: "85.32%"
    },
    "@media (max-width: 700px)": {
      display: "none"
    }
  },
  panelHeader: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  panelTitle: {
    width: "300px",
    marginBottom: "5rem",
    zIndex: "1",
    textAlign: "center",
    fontSize: "28px",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText
  },
  panelIcon: {
    height: "66px",
    width: "67px",
    left: "101.671875px",
    top: "0.5px",
    zIndex: "2",
    borderRadius: "0px"
  }
}));

const SidePanel = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.panelContainer}>
        <div className={classes.panelHeader}>
          <img
            srcSet="assets/bubble.svg"
            alt="Message Bubble Icon"
            className={classes.panelIcon}
          />
          <h1 className={classes.panelTitle}>
            Converse with anyone with any language
          </h1>
        </div>
      </Box>
    </React.Fragment>
  );
};
export default SidePanel;
