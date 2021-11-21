import React from "react";

import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
          alt="Youtube logo"
        />
        <button>Login with google</button>
        <p>This project is created using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
