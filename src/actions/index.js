import { removeAuthToken } from "../lib/localStorage";
import { forceLogout, initialize } from "../redux/slices/authSlice";
import axios from "../config/axios";

export const forceSignout = (navigate, dispatch) => {
  removeAuthToken();
  dispatch(forceLogout({}));
  navigate("/signin");
};

export const loadUser = async (dispatch) => {
  try {
    const response = await axios({
      url: "/viewuser",
      method: "get",
    });
    dispatch(
      initialize({ isAuth: true, userId: response.data.user._id, user: response.data.user })
    );
  } catch (error) {
    dispatch(initialize({ isAuth: false }));
  }
};
