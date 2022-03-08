import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    otherUserRoot: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    avatar: {
      height: 30,
      width: 30,
      marginRight: 5,
      marginTop: 5,
    },
    otherUserAvatar: {
      height: 30,
      width: 30,
      marginRight: 8,
      marginTop: 6,
    },
    date: {
      fontSize: 11,
      marginTop: 8,
      marginBottom: 5,
      fontWeight: theme.typography.button.fontWeight,
      color: "#BECCE2",
    },
    usernameDate: {
      fontSize: 11,
      marginBottom: 5,
      fontWeight: theme.typography.button.fontWeight,
      color: "#BECCE2",
    },
    text: {
      textAlign: "flex-end",
      padding: 8,
      letterSpacing: -0.2,
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.button.fontWeight,
      color: "#91A3C0",
      backgroundColor: "#F4F6FA",
    },
    otherUserText: {
      textAlign: "flex-start",
      color: "#FFFFFF",
    },
    bubble: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      textAlign: "right",
      borderRadius: "10px 10px 0 10px",
    },
    otherUserBubble: {
      justifyContent: "flex-start",
      backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
      borderRadius: "0 10px 10px 10px",
    },
    bubbleImageBox: {
      textAlign: "right",
      "@media (max-width: 320px)": {
        display: "grid",
        placeItems: "center",
        gridGap: "8px",
        gridAutoRows: "105px",
        gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
        marginTop: 8,
      },
    },
    otherUserImageBox: {
      textAlign: "left",
      "@media (max-width: 320px)": {
        display: "grid",
        placeItems: "center",
        gridGap: "8px",
        gridAutoRows: "105px",
        gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
        marginTop: 8,
      },
    },
    bubbleImage: {
      width: "180px",
      margin: "10px",
      borderRadius: "10px",
      "@media (max-width: 320px)": {
        height: "100%",
        width: "100%",
      },
    },
  })
);
