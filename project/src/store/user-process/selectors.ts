import { AuthorizationStatus, StoreSlice } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/types';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS}: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS}: State): UserData => USER_PROCESS.user;
