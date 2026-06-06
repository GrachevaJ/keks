import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreSlice } from '../../const';
import { UserProcess } from '../../types/state';
import { fetchUserStatus, loginUser, logoutUser, signupUser, uploadAvatar } from '../actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: {
    email: '',
    avatarUrl: '',
  },
  isRegistering: false
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = {email: '', avatarUrl: ''};
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = {email: '', avatarUrl: ''};
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isRegistering = false;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = {email: '', avatarUrl: ''};
      });
  },
});

