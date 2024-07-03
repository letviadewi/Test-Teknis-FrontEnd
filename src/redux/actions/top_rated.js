import endpoints from "../../API/endpoints";
import { apiGet } from "../../API/api";

export const getTopRated =
  (body = null) =>
  async (dispatch) => {
    dispatch({
      type: "TOP_RATED_PENDING",
    });

    const response = await apiGet(endpoints.TOP_RATED, body);
    if (response.status == 200) {
      dispatch({
        type: "GET_TOP_RATED_SUCCESS",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "GET_TOP_RATED_FAILED",
        payload: response.data.error,
      });
    }
  };
