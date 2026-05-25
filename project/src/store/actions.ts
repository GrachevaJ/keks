import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { CategoryName, Offer, ToppingName, User } from '../types/types';

export const Action = {
  SET_CATEGORY: 'category/set',
  SET_OFFERS: 'offers/set',
  SET_TYPE: 'type/set',
  FETCH_OFFERS: 'offers/fetch',
  FETCH_USER_STATUS: 'user/fetch-status'
};

export const setCategory = createAction<CategoryName | null>(Action.SET_CATEGORY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setType = createAction<ToppingName[]>(Action.SET_TYPE);

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>(
  Action.FETCH_OFFERS,
  async (_, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: AxiosInstance}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra: api}) => {
    const {data} = await api.get<User>(ApiRoute.Login);

    return data;
  });
