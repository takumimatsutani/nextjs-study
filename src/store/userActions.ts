export const SET_USER_TOKEN = 'SET_USER_TOKEN';

interface SetUserTokenAction {
  type: typeof SET_USER_TOKEN;
  payload: string;
}

export const setUserToken = (token: string): SetUserTokenAction => ({
  type: SET_USER_TOKEN,
  payload: token,
});
