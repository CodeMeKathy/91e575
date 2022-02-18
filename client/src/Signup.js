import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";

import { SidePanel } from "./components/index";

const useStyles = makeStyles((theme) => ({
  signUpContainer: {
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
    alignItems: "center"
  },
  signUpBox: {
    display: "flex",
    height: "100vh",
    width: "55vw",
    flexDirection: "column",
    placeContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.contrastText,
    "@media (max-width: 700px)": {
      width: "100vw"
    }
  },
  signUpLoginGrid: {
    display: "flex",
    height: "20vh",
    justifyContent: "flex-end",
    width: "90%",
    alignContent: "center",
    color: theme.palette.secondary.main,
    lineHeight: "40px",
    "& p": {
      lineHeight: 3.25
    },
    "@media (max-width: 700px)": {
      height: "18vh",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignContent: "flex-end"
    }
  },
  signUpLoginBtn: {
    height: "54px",
    width: "140px",
    marginLeft: "30px",
    color: theme.palette.primary.main,
    background: theme.palette.contrastText,
    boxShadow: "0px 2px 12px 0px #4A6A9533",
    borderRadius: "5px",
    "@media (max-width: 700px)": {
      height: "40px",
      width: "120px",
      marginLeft: "70px"
    }
  },
  signUpHeader: {
    height: "5.5vh",
    fontSize: "26px",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "0px",
    "@media (max-width: 320px)": {
      height: "6.5vh",
      fontSize: "24px"
    }
  },
  signUpGrid: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpInput: {
    width: "23.75rem",
    marginBottom: "1.875rem",
    "@media (max-width: 768px)": {
      width: "100%"
    },
    "@media (max-width: 320px)": {
      width: "100%",
      marginBottom: "0.875rem"
    }
  },
  signUpForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  signUpBtn: {
    height: "56px",
    width: "160px",
    marginTop: "10px",
    lineHeight: "24px",
    fontSize: "16px",
    fontWeight: "700",
    color: theme.palette.primary.contrastText,
    borderRadius: "3px",
    background: theme.palette.primary.main,
    "@media (max-width: 700px)": {
      height: "42px",
      width: "145px"
    }
  }
}));
const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid className={classes.signUpContainer} container justify="center">
      <SidePanel />
      <Box className={classes.signUpBox}>
        <Grid container item className={classes.signUpLoginGrid}>
          <Typography>Already have an account?</Typography>
          <Button
            onClick={() => history.push("/login")}
            className={classes.signUpLoginBtn}
          >
            Login
          </Button>
        </Grid>
        <Grid container item className={classes.signUpGrid}>
          <form onSubmit={handleRegister} className={classes.signUpForm}>
            <Grid>
              <Typography className={classes.signUpHeader}>
                Create an account.
              </Typography>
              <Grid>
                <FormControl fullWidth>
                  <TextField
                    className={classes.signUpInput}
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl fullWidth>
                  <TextField
                    className={classes.signUpInput}
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl
                  fullWidth
                  error={!!formErrorMessage.confirmPassword}
                >
                  <TextField
                    className={classes.signUpInput}
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl
                  fullWidth
                  error={!!formErrorMessage.confirmPassword}
                >
                  <TextField
                    className={classes.signUpInput}
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              className={classes.signUpBtn}
              type="submit"
              variant="contained"
              size="large"
            >
              Create
            </Button>
          </form>
        </Grid>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
