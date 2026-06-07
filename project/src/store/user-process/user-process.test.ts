import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { fetchUserStatus, loginUser, logoutUser, signupUser, uploadAvatar } from '../actions';
import { userProcess } from './user-process';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: {
    email: '',
    avatarUrl: '',
  },
  isRegistering: false
};

const mockUser = {
  email: 'test@example.com',
  avatarUrl: 'https://example.com'
};

describe('Reducer: userProcess', () => {
  it('should return to the initial state with an unknown action', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  it('should set the Auth status and user data when fulfilled', () => {
    const action = { type: fetchUserStatus.fulfilled.type, payload: mockUser };
    const result = userProcess.reducer(initialState, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(result.user).toEqual(mockUser);
  });

  it('should set the NoAuth status and clear user data when rejected', () => {
    const stateWithUser = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      isRegistering: false
    };
    const action = { type: fetchUserStatus.rejected.type };
    const result = userProcess.reducer(stateWithUser, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toEqual({ email: '', avatarUrl: '' });
  });
});

describe('loginUser', () => {
  it('should set the Auth status and user data when fulfilled', () => {
    const action = { type: loginUser.fulfilled.type, payload: mockUser };
    const result = userProcess.reducer(initialState, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(result.user).toEqual(mockUser);
  });

  it('should reset authorization and clear data when rejected', () => {
    const stateWithUser = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      isRegistering: false
    };
    const action = { type: loginUser.rejected.type };
    const result = userProcess.reducer(stateWithUser, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toEqual({ email: '', avatarUrl: '' });
  });
});

describe('signupUser', () => {
  it('should reset the registration flag and leave NoAuth when fulfilled', () => {
    const stateBefore = { ...initialState, isRegistering: true };
    const action = { type: signupUser.fulfilled.type };
    const result = userProcess.reducer(stateBefore, action);

    expect(result.isRegistering).toBeFalsy();
    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });
});

describe('uploadAvatar', () => {
  it('should update user data and confirm Auth when fulfilled', () => {
    const updatedUser = { ...mockUser, avatarUrl: 'https://example.com' };
    const action = { type: uploadAvatar.fulfilled.type, payload: updatedUser };
    const result = userProcess.reducer(initialState, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(result.user).toEqual(updatedUser);
  });
});

describe('logoutUser', () => {
  it('should log out the user and clear the state when fulfilled', () => {
    const stateWithUser = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      isRegistering: false
    };
    const action = { type: logoutUser.fulfilled.type };
    const result = userProcess.reducer(stateWithUser, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toEqual({ email: '', avatarUrl: '' });
  });
});

