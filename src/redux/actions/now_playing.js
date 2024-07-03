import endpoints from "../../API/endpoints";
import { apiGet } from "../../API/api";

export const getPlaying =
  (body = null) =>
  async (dispatch) => {
    dispatch({
      type: "PLAYING_PENDING",
    });

    const response = await apiGet(endpoints.NOW_PLAYING, body);
    if (response.status == 200) {
      dispatch({
        type: "GET_PLAYING_SUCCESS",
        payload: response.data.results,
      });
      console.log(response.data.results)
    } else {
      dispatch({
        type: "GET_PLAYING_FAILED",
        payload: response.data.error,
      });
    }
  };
