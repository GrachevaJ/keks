import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, HttpCode } from '../const';
import { Category, Comment, FavoriteAuth, Offer, ReviewAuth, SignupData, User, UserAuth, UserData } from '../types/types';
import {History} from 'history';
import { Token } from '../utils';


type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  FETCH_OFFERS: 'offers/fetch',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  SIGNUP_USER: 'user/signup',
  FETCH_OFFER: 'offer/fetch',
  FETCH_CATEGORIES: 'categories/fetch',
  FETCH_LAST_REVIEW: 'last-review/fetch',
  FETCH_REVIEWS: 'reviews/fetch',
  FETCH_FAVORITES_OFFERS: 'favorites-offer/fetch',
  TOGGLE_FAVORITE: 'offer/toggle-favorite',
  POST_REVIEW: 'reviews/post'
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: Extra}>(
  Action.FETCH_OFFERS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: Extra}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<User>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserData, UserAuth, {extra: Extra}>(
  Action.LOGIN_USER,
  async({email, password}, {extra}) => {
    const {api, history} = extra;
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    history.push(AppRoute.Root);

    return data;
  });

export const signupUser = createAsyncThunk<User, SignupData, {extra: Extra}>(
  Action.SIGNUP_USER,
  async({name, email, password}, {extra}) => {
    const {api, history} = extra;
    const {data} = await api.post<User>(ApiRoute.Signup, {name, email, password});

    Token.save(data.token);
    history.push(AppRoute.Root);

    return data;
  });

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], {extra: Extra}>(
  Action.FETCH_OFFER,
  async (id, {extra}) => {
    const {api, history} = extra;

    try {
      const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(axiosError);
    }
  });

export const fetchCategories = createAsyncThunk<Category[], undefined, {extra: Extra}>(
  Action.FETCH_CATEGORIES,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Category[]>(ApiRoute.Categories);

    return data;
  });

export const fetchLastReview = createAsyncThunk<Comment, undefined, {extra: Extra}>(
  Action.FETCH_LAST_REVIEW,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Comment>(ApiRoute.LastReview);

    return data;
  });

export const fetchReviews = createAsyncThunk<Comment[], Offer['id'], {extra: Extra}>(
  Action.FETCH_REVIEWS,
  async (id, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Comment[]>(`${ApiRoute.Reviews}/${id}`);

    return data;
  });

export const fetchFavoritesOffers = createAsyncThunk<Offer[], undefined, {extra: Extra}>(
  Action.FETCH_FAVORITES_OFFERS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Offer[]>(ApiRoute.Favorites);

    return data;
  });

export const toggleFavorite = createAsyncThunk<Offer, FavoriteAuth, {extra: Extra}>(
  Action.TOGGLE_FAVORITE,
  async ({id, isFavorite}, {extra}) => {
    const {api, history} = extra;

    try {
      const {data} = isFavorite
        ? await api.delete<Offer>(`${ApiRoute.Favorites}/${id}`)
        : await api.put<Offer>(`${ApiRoute.Favorites}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        history.push(AppRoute.Login);
      }

      return Promise.reject(error);
    }
  });

export const postReview = createAsyncThunk<Comment[], ReviewAuth, {extra: Extra}>(
  Action.POST_REVIEW,
  async ({id, positive, negative, rating}, {extra}) => {
    const {api} = extra;
    const {data} = await api.post<Comment[]>(`${ApiRoute.Reviews}/${id}`, {positive, negative, rating});

    return data;
  }
);
