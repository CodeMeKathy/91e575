import { Box, Typography, Avatar } from "@material-ui/core";
import useBubbleTheme from "../../themes/bubbleTheme";

const ImageTextBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { time, otherUser, imageURLs, user, text } = props;

  return (
    <>
      {/* Single Image && Text */}
      <Box
        className={
          user ? bubbleTheme.bubbleImageBox : bubbleTheme.otherUserImageBox
        }
      >
        <Typography
          className={user ? bubbleTheme.date : bubbleTheme.usernameDate}
        >
          {otherUser ? otherUser.username : null}
          {time}
        </Typography>
        <img
          src={imageURLs[0]}
          alt="image"
          key={imageURLs[0]}
          className={bubbleTheme.bubbleImage}
        />
      </Box>
      <Box className={user ? bubbleTheme.bubble : bubbleTheme.otherUserBubble}>
        <Typography
          className={user ? bubbleTheme.text : bubbleTheme.otherUserText}
        >
          {text}
        </Typography>
      </Box>
      <Avatar
        alt={user ? user.username : otherUser.username}
        src={user ? user.photoUrl : otherUser.photoUrl}
        className={user ? bubbleTheme.avatar : bubbleTheme.otherUserAvatar}
      ></Avatar>
    </>
  );
};

export default ImageTextBubble;
