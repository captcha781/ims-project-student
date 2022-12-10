import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state, action) => {
      state = action.payload;
    },
    forceLogout: (state, action) => {
      state = initialState;
    },
  },
});

export const { initialize, forceLogout } = authSlice.actions;
export default authSlice.reducer;
