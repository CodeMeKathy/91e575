import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },
  usernameDate: {
    fontSize: 11,
    marginBottom: 5,
    fontWeight: theme.typography.button.fontWeight,
    color: "#BECCE2"
  },
  text: {
    textAlign: "flex-start",
    padding: 8,
    letterSpacing: -0.2,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    color: "#FFFFFF"
  },
  bubble: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px"
  },
  bubbleImageBox: {
    textAlign: "left",
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

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, imageURLs } = props;
  return (
    <>
      <Box className={classes.root}>
        {/* Text Only */}
        {text && !imageURLs.length ? (
          <>
            <Avatar
              alt={otherUser.username}
              src={otherUser.photoUrl}
              className={classes.avatar}
            ></Avatar>
            <Box>
              <Typography className={classes.usernameDate}>
                {otherUser.username} {time}
              </Typography>
              <Box className={classes.bubble}>
                <Typography className={classes.text}>{text}</Typography>
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}

        {/* Image(s) Only */}
        {imageURLs.length && !text ? (
          <>
            <Typography className={classes.usernameDate}>
              {otherUser.username} {time}
            </Typography>
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
              alt={otherUser.username}
              src={otherUser.photoUrl}
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
              <Typography className={classes.usernameDate}>
                {otherUser.username} {time}
              </Typography>
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
              alt={otherUser.username}
              src={otherUser.photoUrl}
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
            <Typography className={classes.usernameDate}>
              {otherUser.username} {time}
            </Typography>
            <Avatar
              alt={otherUser.username}
              src={otherUser.photoUrl}
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

export default OtherUserBubble;
