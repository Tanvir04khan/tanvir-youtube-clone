import * as actionTypes from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("access-token"),
  user: sessionStorage.getItem("profile")
    ? JSON.parse(sessionStorage.getItem("profile"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case actionTypes.LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case actionTypes.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
