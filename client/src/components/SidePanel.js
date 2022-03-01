import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    display: "flex",
    flexDirection: "column",
    placeContent: "center",
    width: "425px",
    height: "100%",
    position: "relative",
    zIndex: "0",
    background: "url(../assets/bg-img.png) no-repeat center center",
    backgroundSize: "425px 100vh",
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
  panelIcon: {
    height: "66px",
    width: "67px",
    marginBottom: "1.875rem",
    zIndex: "2",
    borderRadius: "0px"
  },
  panelTitle: {
    width: "300px",
    marginBottom: "5rem",
    zIndex: "1",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "400",
    fontFamily: theme.typography.fontFamily,
    lineHeight: "40px",
    color: theme.palette.primary.contrastText
  }
}));

const SidePanel = () => {
  const classes = useStyles();

  return (
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
  );
};
export default SidePanel;
