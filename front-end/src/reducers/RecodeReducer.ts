import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IRecode } from '@src/models/recode';

type recodeState = {
  recode: {
    isLoaded: boolean;
    isFailed: boolean;
    data: IRecode[]
  }
}

const recodeState: recodeState = {
  recode: {
    isLoaded: false,
    isFailed: false,
    data: [],
  }
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
