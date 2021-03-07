import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserInfo } from '@src/models/User';

type UserState = {
  info: IUserInfo | null;
}

const userState: UserState = {
  info: null
};

export const slice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setUserProfile(state: UserState, action) {
      state.info = action.payload;
    },
  },
  extraReducers: {
  },
});

// 일반 리듀서 export. 필요 없을 경우 삭제
export const {
  setUserProfile,
} = slice.actions;

const UserReducer = slice.reducer;
export default UserReducer;
