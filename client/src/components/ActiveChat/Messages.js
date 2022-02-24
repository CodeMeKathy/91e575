import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, user } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm a");
        return message.senderId === userId ? (
          <SenderBubble
            user={user}
            key={message.id}
            text={message.text}
            time={time}
            imageURLs={message.attachments}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            imageURLs={message.attachments}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
