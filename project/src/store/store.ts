import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setOffers } from './actions';
import { offers } from '../mocks/mocks';

const store = configureStore({reducer});

store.dispatch(setOffers(offers));

export default store;
