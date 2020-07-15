import { createAction, union } from '@ngrx/store';
import { UserModel } from '../../shared/models/user';

export const trySignup = createAction(
  '[Auth] TrySignup',
  (payload: UserModel) => ({ payload })
);

export const trySignin = createAction(
  '[Auth] TrySignIn',
  (payload: UserModel) => ({ payload })
);

export const signup = createAction('[Auth] Signup', (payload: any) => ({
  payload,
}));

export const signin = createAction('[Auth] Signin', (payload: any) => ({
  payload,
}));

export const logout = createAction('[Auth] Logout', (payload: any) => ({
  payload,
}));

export const setToken = createAction('[Auth] SetToken', (payload: string) => ({
  payload,
}));

const actions = union({
  trySignup,
  trySignin,
  signup,
  signin,
  logout,
  setToken,
});

export type AuthActionsUnion = typeof actions;
