import { axiosInstance } from "../../config/config";
import user_types from "../auth/types";

export function userLogin(values) {
  return async function (dispatch) {
    try {
      const res = await axiosInstance.get("/users/", { params: values });
      const userData = res.data[0];

      if (userData) {
        dispatch({
          type: user_types.USER_LOGIN,
          payload: userData,
        });
        localStorage.setItem("user_data", JSON.stringify(userData));
        return { status: true, data: userData };
      }
      return { status: false, data: {} };
    } catch (err) {
      console.log(err);
      return { status: false, data: {} };
    }
  };
}
