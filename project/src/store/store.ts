import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { fetchOffers, fetchUserStatus } from './actions';
import { createAPI } from '../api';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;
