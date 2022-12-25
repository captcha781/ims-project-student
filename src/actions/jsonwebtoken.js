import jwt from "jwt-decode";
import { removeAuthorization } from "../config/axios";
import { removeAuthToken } from "../lib/localStorage";
import isEmpty from "../lib/isEmpty";
import config from "../config";
import { initialize } from "../redux/slices/authSlice";

export const decodeJwt = (token, dispatch) => {
  try {
    if (!isEmpty(token)) {
      token = token.replace("Bearer ", "");
      const decoded = jwt(token);
      if (decoded) {
        dispatch(
          initialize({
            isAuth: true,
            userId: decoded._id,
            user: {}
          })
        );
      }
    }
  } catch (err) {
    removeAuthToken();
    removeAuthorization();
    dispatch(initialize({ isAuth: false, userId: "", user: {} }));
  }
};

// export const tokenVerify = (token) => {
//   try {
//     if (!isEmpty(token)) {
//       token = token.replace("Bearer ", "");
//       const decoded = jwt.verify(token, config.secretOrKey);
//       if (decoded) {
//         return true;
//       }
//     }
//     return false;
//   } catch (err) {
//     return false;
//   }
// };

// export const getDecodeToken = (token) => {
//   try {
//     if (!isEmpty(token)) {
//       token = token.replace("Bearer ", "");
//       const decoded = jwt.verify(token, config.secretOrKey);
//       return decoded;
//     }
//   } catch (err) {
//     return false;
//   }
// };
