import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
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
    <Grid className={authLayout.authContainer} container justify="center">
      <SidePanel />
      <Box className={authLayout.authBox}>
        <CTAHeader
          ctaHeader="Already have an account?"
          ctaButtonText="Login"
          onClick={() => history.push("/login")}
          width="140px"
          mobileWidth="120px"
        />
        <Grid container item className={authLayout.authGrid}>
          <form onSubmit={handleRegister} className={authLayout.authForm}>
            <FormHeader formHeader="Create an account." />
            <FormInput
              aria-label="Username"
              label="Username"
              name="username"
              type="text"
              required
            />
            <FormInput
              aria-label="E-mail address"
              label="E-mail address"
              name="email"
              type="email"
              required
            />
            <FormInput
              aria-label="Password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              error={!!formErrorMessage.confirmPassword}
              formHelperText={formErrorMessage.confirmPassword}
              required
            />
            <FormInput
              label="Confirm Password"
              aria-label="Confirm Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="confirmPassword"
              error={!!formErrorMessage.confirmPassword}
              formHelperText={formErrorMessage.confirmPassword}
              required
            />
            <CTAButton ctaButtonText="Create" type="submit" />
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
