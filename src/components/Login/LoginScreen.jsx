import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/action/auth.action";

import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
  };

  const accessToken = useSelector((state) => state.auth.accessToken);

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h1>Youtube</h1>
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
          alt="Youtube logo"
        />
        <button onClick={loginHandler}>Login with google</button>
        <p>This project is created using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
