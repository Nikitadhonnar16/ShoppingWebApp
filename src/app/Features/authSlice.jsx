import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // Tracks if the user is logged in
  isNewUser: true,        // Tracks if the user is new (for Signup/Login toggle)
  userDetails: null,      // Stores user details after authentication
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userDetails = null;
    },
    toggleUserStatus: (state) => {
      state.isNewUser = !state.isNewUser;
    },
    signup: (state, action) => {
      // Simulates user signup process
      state.isNewUser = false;
      state.userDetails = action.payload;
    },
  },
});

export const { login, logout, toggleUserStatus, signup } = authSlice.actions;
export default authSlice.reducer;
