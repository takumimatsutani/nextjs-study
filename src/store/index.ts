// store/userReducer.ts

import { SET_USER_TOKEN } from './userActions';

const initialState = {
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default userReducer;
