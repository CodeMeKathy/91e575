import { Box, Typography, Avatar } from "@material-ui/core";
import useBubbleTheme from "../../themes/bubbleTheme";

const TextBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { time, otherUser, user, text } = props;

  return (
    <>
      {/* Text Only */}
      {user ? (
        <>
          <Typography className={bubbleTheme.date}>{time}</Typography>
          <Box className={bubbleTheme.bubble}>
            <Typography className={bubbleTheme.text}>{text}</Typography>
          </Box>
        </>
      ) : (
        <>
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={bubbleTheme.otherUserAvatar}
          ></Avatar>
          <Box>
            <Typography className={bubbleTheme.usernameDate}>
              {otherUser ? otherUser.username : null}
              {time}
            </Typography>
            <Box className={bubbleTheme.bubble}>
              <Typography className={bubbleTheme.otherUserText}>
                {text}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default TextBubble;
