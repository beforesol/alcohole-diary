import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { EInputMode, EUnit, IRecode } from '@src/models/recode';

const demo = [
  {
    id: '1',
    type: '소주',
    count: 0,
    unit: EUnit.BOTTLE,
    inputMode: EInputMode.TEXT,
  },
  {
    id: '2',
    type: '맥주',
    count: 0,
    unit: EUnit.BOTTLE,
    inputMode: EInputMode.TEXT,
  },
  {
    id: '3',
    type: '와인',
    count: 0,
    unit: EUnit.BOTTLE,
    inputMode: EInputMode.TEXT,
  },
  {
    id: '4',
    type: '막걸리',
    count: 0,
    unit: EUnit.BOTTLE,
    inputMode: EInputMode.TEXT,
  }
]

interface IRecodeState {
  recode: {
    isLoaded: boolean;
    isFailed: boolean;
    list: IRecode[]
  }
}

const initialState: IRecodeState = {
  recode: {
    isLoaded: false,
    isFailed: false,
    list: demo,
  }
};

export const slice = createSlice({
  name: '@src/models/recode',
  initialState,
  reducers: {
    updateRecode(state: IRecodeState, action: PayloadAction<IRecode>) {
      const recode = action.payload;

      // TODO: Firebase Data를 직접 바꿀 수 있도록 수정
      const index = state.recode.list.findIndex(item => item.id === recode.id);

      state.recode.list[index] = recode;
    },
    updateUnit(state: IRecodeState, action: PayloadAction<{ id: string, unit: EUnit }>) {
      const { id, unit } = action.payload;

      // TODO: Firebase Data를 직접 바꿀 수 있도록 수정
      const index = state.recode.list.findIndex(recode => recode.id === id);

      state.recode.list[index] = {
        ...state.recode.list[index],
        unit
      }
    },
    updateInputMode(state: IRecodeState, action: PayloadAction<{ id: string, inputMode: EInputMode }>) {
      const { id, inputMode } = action.payload;

      // TODO: Firebase Data를 직접 바꿀 수 있도록 수정
      const index = state.recode.list.findIndex(recode => recode.id === id);

      state.recode.list[index] = {
        ...state.recode.list[index],
        inputMode
      }
    },
    updateCount(state: IRecodeState, action: PayloadAction<{ id: string, count: string | number }>) {
      const { id, count } = action.payload;

      // TODO: Firebase Data를 직접 바꿀 수 있도록 수정
      const index = state.recode.list.findIndex(recode => recode.id === id);

      state.recode.list[index] = {
        ...state.recode.list[index],
        count
      }
    },
  },
  extraReducers: {
  },
});

export const {
  updateRecode,
  updateUnit,
  updateInputMode,
  updateCount
} = slice.actions;

const recodeReducer = slice.reducer;
export default recodeReducer;
