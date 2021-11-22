import * as actions from "../actionType";

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
    case actions.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case actions.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case actions.LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case actions.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
