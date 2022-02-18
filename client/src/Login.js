import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  makeStyles
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";

import { SidePanel } from "./components/index";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginBox: {
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
  loginSignUpGrid: {
    display: "flex",
    height: "20vh",
    justifyContent: "flex-end",
    width: "90%",
    alignContent: "center",
    color: theme.palette.secondary.main,
    lineHeight: "40px",
    "& p": {
      lineHeight: 3.25
    }
  },
  loginSignUpBtn: {
    height: "54px",
    width: "170px",
    marginLeft: "30px",
    color: theme.palette.primary.main,
    background: theme.palette.primary.contrastText,
    boxShadow: "0px 2px 12px 0px #4A6A9533",
    borderRadius: "5px",
    "@media (max-width: 700px)": {
      height: "40px",
      width: "145px",
      marginLeft: "70px"
    }
  },
  loginHeader: {
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
  loginGrid: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  loginInput: {
    width: "23.75rem",
    marginBottom: "1.875rem",
    "& a": {
      fontSize: "12px",
      fontWeight: "600",
      color: theme.palette.primary.main
    },
    "@media (max-width: 768px)": {
      width: "100%"
    },
    "@media (max-width: 320px)": {
      width: "100%",
      marginBottom: "0.875rem"
    }
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  loginBtn: {
    height: "56px",
    width: "170px",
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
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid className={classes.loginContainer} container justify="center">
      <SidePanel />
      <Box className={classes.loginBox}>
        <Grid container item className={classes.loginSignUpGrid}>
          <Typography>Dont' have an account?</Typography>
          <Button
            onClick={() => history.push("/register")}
            className={classes.loginSignUpBtn}
            size="large"
          >
            Create account
          </Button>
        </Grid>
        <Grid container item className={classes.loginGrid}>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <Grid>
              <Typography className={classes.loginHeader}>
                Welcome back!
              </Typography>
              <Grid>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    className={classes.loginInput}
                    aria-label="E-mail address"
                    label="E-mail address"
                    name="email"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  className={classes.loginInput}
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <a
                          href="#"
                          target="_blank"
                          // TODO: Update link to reset password once process confirmed
                        >
                          Forget?
                        </a>
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.loginBtn}
            >
              Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
