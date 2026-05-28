import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { fetchCategories, fetchOffers, fetchUserStatus } from './actions';
import { createAPI } from '../api';
import history from './history';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchCategories());
store.dispatch(fetchOffers());

export default store;
