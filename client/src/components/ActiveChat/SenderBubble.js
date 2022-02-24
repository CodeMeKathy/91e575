import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginTop: 5
  },
  date: {
    fontSize: 11,
    marginTop: 8,
    marginBottom: 5,
    fontWeight: theme.typography.button.fontWeight,
    color: "#BECCE2"
  },
  text: {
    textAlign: "flex-end",
    padding: 8,
    letterSpacing: -0.2,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    color: "#91A3C0",
    backgroundColor: "#F4F6FA"
  },
  bubble: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    textAlign: "right",
    borderRadius: "10px 10px 0 10px"
  },
  bubbleImageBox: {
    textAlign: "right",
    "@media (max-width: 320px)": {
      display: "grid",
      placeItems: "center",
      gridGap: "8px",
      gridAutoRows: "105px",
      gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
      marginTop: 8
    }
  },
  bubbleImage: {
    height: "200px",
    width: "180px",
    margin: "10px",
    borderRadius: "10px",
    "@media (max-width: 320px)": {
      height: "100%",
      width: "100%"
    }
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, imageURLs, user } = props;
  return (
    <>
      <Box className={classes.root}>
        {/* Text Only */}
        {text && !imageURLs.length ? (
          <>
            <Typography className={classes.date}>{time}</Typography>
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          </>
        ) : (
          <></>
        )}

        {/* Image(s) Only */}
        {imageURLs.length && !text ? (
          <>
            <Typography className={classes.date}>{time}</Typography>
            <Box className={classes.bubbleImageBox}>
              {imageURLs.map((imageFile) => (
                <img
                  src={imageFile}
                  alt="image"
                  key={imageFile}
                  className={classes.bubbleImage}
                />
              ))}
            </Box>
            <Avatar
              alt={user.username}
              src={user.photoUrl}
              className={classes.avatar}
            ></Avatar>
          </>
        ) : (
          <></>
        )}

        {/* Single Image && Text */}
        {imageURLs?.length === 1 && text ? (
          <>
            <Box className={classes.bubbleImageBox}>
              <Typography className={classes.date}>{time}</Typography>
              <img
                src={imageURLs[0]}
                alt="image"
                key={imageURLs[0]}
                className={classes.bubbleImage}
              />
            </Box>
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
            <Avatar
              alt={user.username}
              src={user.photoUrl}
              className={classes.avatar}
            ></Avatar>
          </>
        ) : (
          <></>
        )}

        {/* Multi Image && Text */}
        {imageURLs?.length > 1 && text ? (
          <>
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
            <Box className={classes.bubbleImageBox}>
              {imageURLs.map((imageFile) => (
                <img
                  src={imageFile}
                  alt="image"
                  key={imageFile}
                  className={classes.bubbleImage}
                />
              ))}
            </Box>
            <Typography className={classes.date}>{time}</Typography>
            <Avatar
              alt={user.username}
              src={user.photoUrl}
              className={classes.avatar}
            ></Avatar>
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default SenderBubble;
