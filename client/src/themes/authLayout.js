import { createMuiTheme, makeStyles, createStyles } from "@material-ui/core";

export default makeStyles((theme) =>
  createStyles({
    authContainer: {
      display: "flex",
      height: "100vh",
      justifyContent: "space-between",
      alignItems: "center",
      "@media (max-width: 768px)": {
        flexDirection: "column"
      }
    },
    authBox: {
      backgroundColor: "red !important",
      display: "flex",
      height: "100vh",
      width: "66%",
      flexDirection: "column",
      backgroundColor: theme.palette.contrastText,
      "@media (min-width: 1512px)": {
        width: "71%"
      },
      "@media (max-width: 1024px)": {
        width: "58%"
      },
      "@media (max-width: 834px)": {
        width: "45%"
      },
      "@media (max-width: 700px)": {
        width: "100vw"
      }
    },
    authGrid: {
      display: "flex",
      flexDirection: "column",
      height: "80vh",
      width: "100%",
      paddingTop: "5rem",
      "@media (max-width: 834px)": {
        height: "70vh"
      },
      "@media (max-width: 320px)": {
        height: "100%",
        padding: "3rem 0 6rem 0"
      }
    },
    authForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }
  })
);
