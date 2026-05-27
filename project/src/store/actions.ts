import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../const';
import { CategoryName, Offer, SignupData, ToppingName, User, UserAuth } from '../types/types';
import {History} from 'history';
import { Token } from '../utils';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  SET_CATEGORY: 'category/set',
  SET_OFFERS: 'offers/set',
  SET_TYPE: 'type/set',
  FETCH_OFFERS: 'offers/fetch',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  SIGNUP_USER: 'user/signup'
};

export const setCategory = createAction<CategoryName | null>(Action.SET_CATEGORY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setType = createAction<ToppingName[]>(Action.SET_TYPE);

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

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, {extra: Extra}>(
  Action.LOGIN_USER,
  async({email, password}, {extra}) => {
    const {api, history} = extra;
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    history.push(AppRoute.Root);

    return email;
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
