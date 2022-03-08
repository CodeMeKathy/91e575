import React, { useState } from "react";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import {
  makeStyles,
  FormControl,
  FilledInput,
  InputAdornment,
  Tooltip,
  Box,
  LinearProgress
} from "@material-ui/core";

import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
    MuiSvgIcon: {
      root: {
        "&:hover": {
          cursor: "pointer"
        }
      }
    }
  },
  errorMsg: {
    textAlign: "center"
  },
  hiddenLabel: {
    height: "1px",
    width: "1px",
    position: "absolute !important",
    overflow: "hidden",
    clip: "rect(1px 1px 1px 1px)"
  },
  imagePreview: {
    display: "grid",
    placeItems: "center",
    justifyContent: "flex-end",
    gridAutoRows: "180px",
    gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))"
  },
  loadingProgressDiv: {
    width: "100%"
  },

  loadingProgressHidden: {
    display: "none"
  },
  input: {
    height: 70,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#F4F6FA",
    "@media (max-width: 768px)": {
      width: "20rem !important",
      marginLeft: "-10rem"
    },
    "@media (max-width: 320px)": {
      width: "15rem !important",
      marginLeft: "-8.14rem"
    }
  },
  imageUploadInput: {
    color: "#D1D9E6",
    display: "none"
  },
  imageUploadLabel: {
    "&:hover": {
      padding: "1px 1px 1px 3px",
      cursor: " pointer",
      borderRadius: 8,
      backgroundColor: theme.palette.primary.light
    }
  },
  inputIcon: {
    margin: theme.spacing(1),
    color: "#D1D9E6"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const axiosInstance = axios.create();

  const { postMessage, otherUser, conversationId, user } = props;

  const handleImageSelection = (event) => {
    event?.preventDefault();
    const images = Object.values(event.target.files);
    setSelectedImages(images);
  };

  const axiosPost = async (url, data) => {
    return axiosInstance.post(url, data);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.

    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
    const imageUploadRequests = [];
    let imageURLs = [];

    setIsLoading(true);
    // Create a formData object for each user selected image
    selectedImages.forEach(async (imageFile) => {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", `${uploadPreset}`);
      imageUploadRequests.push(axiosPost(cloudinaryURL, formData));
    });
    try {
      const imageUploadResponses = await Promise.allSettled(
        imageUploadRequests
      );
      imageURLs = imageUploadResponses.map(
        ({
          value: {
            data: { secure_url }
          }
        }) => secure_url
      );
    } catch (error) {
      setErrorMsg(error.message);
      console.log("Cloudinary image upload error. ", error.message);
    } finally {
      setIsLoading(false);
    }
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      attachments: imageURLs,
      sender: conversationId ? null : user
    };
    await postMessage(reqBody);
    setSelectedImages([]);
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {errorMsg ? (
        <Box color="error.main" className={classes.errorMsg}>
          <h3>{`Upload Error: ${errorMsg} Please try again.`} </h3>
        </Box>
      ) : null}
      <FormControl fullWidth hiddenLabel>
        {/* Image(s) Upload Preview */}
        {selectedImages.length > 0 && (
          <Box className={classes.imagePreview}>
            {selectedImages?.map((imageUploadURL, index) => (
              <img
                alt='Image Upload Preview'
                key={`${imageUploadURL}.${index}`}
                src={URL.createObjectURL(imageUploadURL)}
                style={{
                  height: "80px",
                  borderRadius: "10px"
                }}
              />
            ))}
          </Box>
        )}
        <Box
          className={
            isLoading
              ? classes.loadingProgressDiv
              : classes.loadingProgressHidden
          }
        >
          <LinearProgress />
        </Box>
        <label htmlFor="text" className={classes.hiddenLabel}>
          Chat Input Hidden Label
        </label>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          id="text"
          aria-label="text"
          onChange={handleChange}
          disabled={isLoading}
          endAdornment={
            <Tooltip title="Upload Image" aria-label="Upload Image">
              <InputAdornment position="end">
                <input
                  className={classes.imageUploadInput}
                  type="file"
                  multiple
                  name="image-upload"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageSelection}
                />
                <label
                  htmlFor="image-upload"
                  className={classes.imageUploadLabel}
                >
                  <SentimentSatisfiedSharpIcon className={classes.inputIcon} />
                  <FileCopyRoundedIcon className={classes.inputIcon} />
                </label>
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
