import { Box, Typography, Avatar } from "@material-ui/core";
import useBubbleTheme from "../../themes/bubbleTheme";

const MultiImageTextBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { time, text, otherUser, imageURLs, user } = props;
  return (
    <>
      {/* Multi Image && Text */}
      <Box className={user ? bubbleTheme.bubble : bubbleTheme.otherUserBubble}>
        <Typography
          className={user ? bubbleTheme.text : bubbleTheme.otherUserText}
        >
          {text}
        </Typography>
      </Box>
      <Box
        className={
          user ? bubbleTheme.bubbleImageBox : bubbleTheme.otherUserImageBox
        }
      >
        {imageURLs.map((imageFile) => (
          <img
            src={imageFile}
            alt="image"
            key={imageFile}
            className={
              user ? bubbleTheme.bubbleImage : bubbleTheme.otherUserImage
            }
          />
        ))}
      </Box>
      <Typography
        className={user ? bubbleTheme.date : bubbleTheme.usernameDate}
      >
        {otherUser ? otherUser.username : null} {time}
      </Typography>
      <Avatar
        alt={user ? user.username : otherUser.username}
        src={user ? user.photoUrl : otherUser.photoUrl}
        className={user ? bubbleTheme.avatar : otherUser.otherUserAvatar}
      ></Avatar>
    </>
  );
};

export default MultiImageTextBubble;
