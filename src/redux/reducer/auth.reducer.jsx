import {
  LOGIN_REQUEST,
  LOAD_PROFILE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("access-token")
    ? sessionStorage.getItem("access-token")
    : null,
  user: sessionStorage.getItem("profile")
    ? JSON.parse(sessionStorage.getItem("profile"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    default:
      return prevState;
  }
};
