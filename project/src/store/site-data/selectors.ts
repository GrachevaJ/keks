import { createSelector } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import type { SortParams, State } from '../../types/state';
import { Offer, Comment } from '../../types/types';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer | null=> SITE_DATA.offer;

export const getReviews = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Comment[] => SITE_DATA.reviews;
export const getLastReview = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Comment => SITE_DATA.lastReview;
export const getReviewsError = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.reviewsError;

export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isFavoriteOffersLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.favoriteOffers;

export const getSortedRviews = createSelector([getReviews, (_state: State, params: SortParams) => params], (reviews: Comment[], {ratingSort, dateSort}) => {
  const reviewsCopy = [...reviews];

  return reviewsCopy.sort((a, b) => {
    if (ratingSort === 'high') {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
    }

    if (ratingSort === 'low') {
      if (a.rating !== b.rating) {
        return a.rating - b.rating;
      }
    }

    const timeA = new Date(a.isoDate).getTime();
    const timeB = new Date(b.isoDate).getTime();

    return dateSort === 'inc' ? timeB - timeA : timeA - timeB;
  });
});
