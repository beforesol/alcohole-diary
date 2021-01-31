import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfile } from '@src/models/kakaoLogin';

type UserState = {
  profile: UserProfile | null;
}

const userState: UserState = {
  profile: null
};

export const slice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setUserProfile(state: UserState, action) {
      state.profile = action.payload;
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
