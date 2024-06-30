import { SET_USER_TOKEN } from './userActions';

interface UserState {
  token: string | null;
}

interface UserAction {
  type: string;
  payload: string;
}

const initialState: UserState = {
  token: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default userReducer;
