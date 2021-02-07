import { EMode } from '@src/constants/Mode';
import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type TModeState = {
  mode: EMode;
}

const modeState: TModeState = {
  mode: EMode.PERSONAL
};

export const slice = createSlice({
  name: 'mode',
  initialState: modeState,
  reducers: {
    setMode(state: TModeState, action) {
      state.mode = action.payload;
    },
  },
  extraReducers: {
  },
});

export const {
  setMode,
} = slice.actions;

const ModeReducer = slice.reducer;
export default ModeReducer;
