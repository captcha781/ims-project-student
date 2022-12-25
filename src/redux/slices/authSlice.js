import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userId:"",
  user: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state, action) => {
      state = action.payload;
      return state
    },
    forceLogout: (state, action) => {
      state = initialState;
      return state
    },
  },
});

export const { initialize, forceLogout } = authSlice.actions;
export default authSlice.reducer;
