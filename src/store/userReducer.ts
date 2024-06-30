import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logoutUser(state) {
      state.token = null;
    },
  },
});

export const { setUserToken, logoutUser } = userSlice.actions;
export default userSlice.reducer;
