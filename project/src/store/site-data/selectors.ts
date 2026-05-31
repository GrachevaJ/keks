import { StoreSlice } from '../../const';
import type { State } from '../../types/state';
import { Offer, Comment } from '../../types/types';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer | null=> SITE_DATA.offer;

export const getReviews = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Comment[] => SITE_DATA.reviews;
export const getLastReview = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Comment | null => SITE_DATA.lastReview;
export const getReviewsError = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.reviewsError;

export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isFavoriteOffersLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.favoriteOffers;
