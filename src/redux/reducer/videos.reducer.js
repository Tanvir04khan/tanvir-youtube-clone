import * as actionTypes from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case actionTypes.HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
