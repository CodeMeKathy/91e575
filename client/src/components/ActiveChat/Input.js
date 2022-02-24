import React, { useState } from "react";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import {
  makeStyles,
  FormControl,
  FilledInput,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";

import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  inputIcon: {
    margin: theme.spacing(1),
    color: "#D1D9E6"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user
    };
    await postMessage(reqBody);
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <Tooltip title="Upload Image" aria-label="Upload Image">
              <InputAdornment position="end">
        />
                  <SentimentSatisfiedSharpIcon className={classes.inputIcon} />
                  <FileCopyRoundedIcon className={classes.inputIcon} />
              </InputAdornment>
            </Tooltip>
          }
        ></FilledInput>
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
