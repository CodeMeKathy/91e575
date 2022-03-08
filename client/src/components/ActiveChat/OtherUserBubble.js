import React from "react";
import { Box } from "@material-ui/core";

import {
  ImagesBubble,
  TextBubble,
  ImageTextBubble,
  MultiImageTextBubble,
} from "../index";
import useBubbleTheme from "../../themes/bubbleTheme";

const OtherUserBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { text, time, otherUser, imageURLs } = props;
  return (
    <>
      <Box className={bubbleTheme.root}>
        {/* Text Only */}
        {text && !imageURLs?.length && (
          <TextBubble otherUser={otherUser} time={time} text={text} />
        )}

        {/* Image(s) Only */}
        {imageURLs?.length && !text ? (
          <ImagesBubble
            otherUser={otherUser}
            time={time}
            text={text}
            imageURLs={imageURLs}
          />
        ) : (
          <></>
        )}

        {/* Single Image && Text */}
        {imageURLs?.length === 1 && text ? (
          <ImageTextBubble
            time={time}
            text={text}
            imageURLs={imageURLs}
            otherUser={otherUser}
          />
        ) : (
          <></>
        )}

        {/* Multi Image && Text */}
        {imageURLs?.length > 1 && text ? (
          <MultiImageTextBubble
            time={time}
            text={text}
            imageURLs={imageURLs}
            otherUser={otherUser}
          />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default OtherUserBubble;
