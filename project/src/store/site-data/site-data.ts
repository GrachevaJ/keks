import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import type { SiteData } from '../../types/state';
import { fetchFavoritesOffers, fetchLastReview, fetchOffer, fetchOffers, fetchReviews, postReview, toggleFavorite } from '../actions';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  lastReview: null,
  reviews: [],
  reviewsError: false
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favoriteOffers = [];

      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: false
      }));

      if (state.offer) {
        state.offer.isFavorite = false;
      }
    }
  },
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
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoritesOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

        if (state.offer && state.offer.id === updatedOffer.id) {
          state.offer = updatedOffer;
        }

        if (updatedOffer.isFavorite) {
          state.favoriteOffers = state.favoriteOffers.concat(updatedOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
        }
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  }
});

export const {clearFavorites} = siteData.actions;
