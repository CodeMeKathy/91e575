import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, InputAdornment } from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import useAuthLayout from "./themes/authLayout";

import {
  SidePanel,
  FormHeader,
  CTAHeader,
  CTAButton,
  FormInput
} from "./components/index";

const Login = (props) => {
  const authLayout = useAuthLayout();
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
    <Grid className={authLayout.authContainer} container justify="center">
      <SidePanel />
      <Box className={authLayout.authBox}>
        <CTAHeader
          ctaHeader="Don't have an account?"
          ctaButtonText="Create account"
          onClick={() => history.push("/register")}
          width="170px"
          mobileWidth="145px"
        />
        <Grid container item className={authLayout.authGrid}>
          <form onSubmit={handleLogin} className={authLayout.authForm}>
            <FormHeader formHeader="Welcome back!" />
            <FormInput
              aria-label="Username"
              label="Username"
              name="username"
              type="text"
              required
            />
            <FormInput
              label="Password"
              aria-label="password"
              type="password"
              name="password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <a
                      href="#"
                      target="_blank"
                      // Backlog ->TODO: -> Update with the correct link to reset password once determined
                    >
                      Forget?
                    </a>
                  </InputAdornment>
                )
              }}
            />
            <CTAButton ctaButtonText="Login" type="submit" />
          </form>
        </Grid>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
