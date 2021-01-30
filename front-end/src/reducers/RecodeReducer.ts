import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type recodeState = {
}

const recodeState: recodeState = {
};

export const slice = createSlice({
  name: '@src/models/recode',
  initialState: recodeState,
  reducers: {

  },
  extraReducers: {
  },
});

export const {
} = slice.actions;

const recodeReducer = slice.reducer;
export default recodeReducer;
