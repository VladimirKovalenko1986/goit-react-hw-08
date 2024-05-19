import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logout, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.isRefreshing = false;
      }),
});

export default authSlice.reducer;
