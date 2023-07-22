import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  login,
  logout,
  refresh,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [login.rejected](state, { payload }) {
      state.isLoading = false;

      state.error = payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
      state.error = null;
    },
    [refresh.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = payload;
    },
    [refresh.rejected](state, { payload }) {
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});