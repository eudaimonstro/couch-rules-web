import {
  AuthActionsUnion,
  trySignup,
  trySignin,
  signup,
  signin,
  logout,
  setToken,
} from './auth.actions';
import { cloneDeep } from 'lodash';

export interface AuthState {
  token: string;
  authenticated: boolean;
}

const initialState: AuthState = {
  token: '',
  authenticated: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActionsUnion
): AuthState {
  switch (action.type) {
    case signup.type:
    case signin.type: {
      const newState = cloneDeep(action.payload);
      return {
        ...(newState as AuthState),
        authenticated: true,
      };
    }
    case logout.type: {
      const newState = cloneDeep(action.payload);
      return {
        ...(newState as AuthState),
        token: null,
        authenticated: false,
      };
    }
    case setToken.type: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
