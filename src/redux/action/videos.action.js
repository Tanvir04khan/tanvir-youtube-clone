import * as actionTypes from "../actionType";
import request from "../../api";

export const getVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.HOME_VIDEOS_REQUEST,
    });

    const { data } = await request.get("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    dispatch({
      type: actionTypes.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: actionTypes.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
