import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import type { CategoryName, Offer, ToppingName, User } from '../types/types';
import { fetchOffers, fetchUserStatus, loginUser, setCategory, setOffers, setType, signupUser } from './actions';

type State = {
  category: CategoryName | null;
  type: ToppingName[];
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User;
}

const initialState: State = {
  category: null,
  type: [],
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: {
    name: '',
    email: '',
    avatarUrl: '',
    token: ''
  }
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setType, (state, action) => {
      state.type = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user.email = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginUser.rejected, (state) => {
      state.user = initialState.user;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});
