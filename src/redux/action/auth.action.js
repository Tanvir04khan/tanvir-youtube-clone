import firebase from "firebase/app";
import auth from "../../firebase";
import * as actions from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);

    const accessToken = response.credential.accessToken;
    const profile = {
      name: response.additionalUserInfo.profile.name,
      photoUrl: response.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("access-token", accessToken);
    sessionStorage.setItem("profile", JSON.stringify(profile));

    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: actions.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: actions.LOGIN_FAIL,
      error: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: actions.LOG_OUT,

  })

  sessionStorage.removeItem("access-token")
  sessionStorage.removeItem("profile")

  
};
