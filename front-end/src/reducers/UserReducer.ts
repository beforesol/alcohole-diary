import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfile } from 'alcoholeDiary';

type UserState = {
  profile: UserProfile;
}

const userState: UserState = {
  profile: {
    id: '',
    kakao_account: {
      profile: {
        nickname: '',
        profile_image: '',
        thumbnail_image_url: '',
        profile_needs_agreement: true
      },
      email: '',
      age_range: '',
      birthday: '',
      birthyear: '',
      gender: 'femail',
      phone_number: '',
      ci: ''
    },
    synched_at: '',
    connected_at: '',
    properties: {
      nickname: '',
      profile_image: '',
      thumbnail_image_url: '',
      profile_needs_agreement: true
    }
  }
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
