import endpoints from "../../API/endpoints";
import { apiGet } from "../../API/api";

export const getUpcoming =
  (body = null) =>
  async (dispatch) => {
    dispatch({
      type: "UPCOMING_PENDING",
    });

    const response = await apiGet(endpoints.UPCOMING, body);
    if (response.status == 200) {
      dispatch({
        type: "GET_UPCOMING_SUCCESS",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "GET_UPCOMING_FAILED",
        payload: response.data.error,
      });
    }
  };
