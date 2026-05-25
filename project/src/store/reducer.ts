import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import type { CategoryName, Offer, ToppingName, User } from '../types/types';
import { fetchOffers, fetchUserStatus, setCategory, setOffers, setType } from './actions';

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
    .addCase(fetchOffers.pending, (state, action) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      // state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});
