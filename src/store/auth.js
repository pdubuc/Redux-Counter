import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAutenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    // we'll receive the current state as an argument automatically by Redux 
    login(state) {
      // we'll mututate the current state (not really because it's thru Redux)
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
