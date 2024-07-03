import endpoints from "../../API/endpoints";
import { apiGet } from "../../API/api";

export const getPopular =
  (body = null) =>
  async (dispatch) => {
    dispatch({
      type: "POPULAR_PENDING",
    });

    const response = await apiGet(endpoints.POPULAR, body);
    if (response.status == 200) {
      dispatch({
        type: "GET_POPULAR_SUCCESS",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "GET_POPULAR_FAILED",
        payload: response.data.error,
      });
    }
  };
