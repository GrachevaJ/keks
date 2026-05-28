import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import type { Category, CategoryName, Offer, ToppingName, User } from '../types/types';
import { fetchCategories, fetchOffer, fetchOffers, fetchUserStatus, loginUser, setOffers, setType, signupUser } from './actions';

type State = {
  type: ToppingName[];
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User;
  offer: Offer | null;
  isOfferLoading: boolean;
  categories: Category[];
  category: CategoryName | null;
}

const initialState: State = {
  type: [],
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: {
    name: '',
    email: '',
    avatarUrl: '',
    token: ''
  },
  offer: null,
  isOfferLoading: false,
  categories: [],
  category: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
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
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
});
