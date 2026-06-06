import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { fetchCategories, fetchFavoritesOffers, fetchOffers, fetchUserStatus } from './actions';
import { createAPI } from '../api';
import history from './history';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});


store.dispatch(fetchCategories());
store.dispatch(fetchOffers());
store.dispatch(fetchUserStatus());
store.dispatch(fetchFavoritesOffers());

export default store;
