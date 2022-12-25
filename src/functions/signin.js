import { message } from "antd";
import axios from "axios";

const signInCall = async (values) => {
  try {
    let response = await axios({
      url: "/signin",
      method: "post",
      data: values
    });
    return response.data
  } catch (error) {
    if (error.response.data.message) {
      message(error.response.data.message);
      return;
    }
    message(error.message);
  }
};

export default signInCall;
