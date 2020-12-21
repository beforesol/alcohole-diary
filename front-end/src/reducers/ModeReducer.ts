import { Mode } from '@constants/Mode';
import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type ModeState = {
  mode: Mode;
}

const modeState: ModeState = {
  mode: Mode.PERSONAL
};

export const slice = createSlice({
  name: 'mode',
  initialState: modeState,
  reducers: {
    setMode(state: ModeState, action) {
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
