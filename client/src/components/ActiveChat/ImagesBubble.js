import { Box, Typography, Avatar } from "@material-ui/core";
import useBubbleTheme from "../../themes/bubbleTheme";

const ImagesBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { time, otherUser, imageURLs, user } = props;

  return (
    <>
      {/* Image(s) Only */}
      <Typography
        className={user ? bubbleTheme.date : bubbleTheme.usernameDate}
      >
        {otherUser ? otherUser.username : null} {time}
      </Typography>
      <Box
        className={
          user ? bubbleTheme.bubbleImageBox : bubbleTheme.otherUserImageBox
        }
      >
        {imageURLs?.map((imageFile) => (
          <img
            src={imageFile}
            alt="image"
            key={imageFile}
            className={bubbleTheme.bubbleImage}
          />
        ))}
      </Box>
      <Avatar
        alt={user ? user.username : otherUser.username}
        src={user ? user.photoUrl : otherUser.photoUrl}
        className={user ? bubbleTheme.avatar : bubbleTheme.otherUserAvatar}
      ></Avatar>
    </>
  );
};

export default ImagesBubble;
