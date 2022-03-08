import React from "react";
import { Box } from "@material-ui/core";

import {
  TextBubble,
  ImagesBubble,
  ImageTextBubble,
  MultiImageTextBubble,
} from "../../components/index";
import useBubbleTheme from "../../themes/bubbleTheme";

const SenderBubble = (props) => {
  const bubbleTheme = useBubbleTheme();
  const { time, text, imageURLs, user } = props;
  return (
    <>
      <Box className={bubbleTheme.root}>
        {/* Text Only */}
        {text && imageURLs?.length === 0 && (
          <TextBubble
            user={user}
            time={time}
            text={text}
            imageURLs={imageURLs}
          />
        )}

        {/* Image(s) Only */}
        {imageURLs?.length && !text ? (
          <ImagesBubble
            user={user}
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
            user={user}
            time={time}
            text={text}
            imageURLs={imageURLs}
          />
        ) : (
          <></>
        )}

        {/* Multi Image && Text */}
        {imageURLs?.length > 1 && text ? (
          <MultiImageTextBubble
            user={user}
            time={time}
            text={text}
            imageURLs={imageURLs}
          />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default SenderBubble;
