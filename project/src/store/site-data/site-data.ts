import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import type { SiteData } from '../../types/state';
import { fetchFavoritesOffers, fetchLastReview, fetchOffer, fetchOffers, fetchReviews } from '../actions';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  favorites: [],
  isFavoriteOffersLoading: false,
  lastReview: {
    id: '',
    isoDate: '',
    user: {
      name: '',
      avatarUrl: '',
    },
    positive: '',
    negative: '',
    rating: 0
  },
  reviews: [],
  reviewsError: false
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      .addCase(fetchLastReview.fulfilled, (state, action) => {
        state.lastReview = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsError = true;
      })
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoritesOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
      });
  }
});
