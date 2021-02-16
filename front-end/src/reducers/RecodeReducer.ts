import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import store from '@src/config/store';
import { firestore } from '@src/firebase';
import { COLLECTION } from '@src/firebase/collection';
import { EInputMode, EUnit, IRecode } from '@src/models/Recode';
import { v4 as uuidv4 } from 'uuid';

interface IRecodeState {
  recode: {
    isLoaded: boolean;
    isFailed: boolean;
    list: IRecode[]
  }
}

const demo = [
  {
    id: uuidv4(),
    type: '소주',
    count: 0,
    unit: EUnit.BOTTLE
  }
]

const initialState: IRecodeState = {
  recode: {
    isLoaded: false,
    isFailed: false,
    list: [],
  }
};

const syncRecode = async () => {
  const recodeCollection = firestore.collection(COLLECTION.RECODE);

  const recodeData = await recodeCollection.get();
  const recodeArr: IRecode[] = [];

  recodeData.forEach((doc: any) => {
    recodeArr.push(doc.data());
  })

  return recodeArr;
}

export const initRecodeList = createAsyncThunk<any, any, any>(
  'recode/initRecodeList',
  async (thunkAPI) => {
    try {
      return await syncRecode();
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }
  }
);

export const updateRecode = createAsyncThunk<any, any, any>(
  'recode/updateRecode',
  async (recode, thunkAPI) => {
    // TODO: doc.id 와 field.id sync 맞추기
    try {
      const recodeCollection = firestore.collection(COLLECTION.RECODE);
      const recodeData = await recodeCollection.where('id', '==', recode.id).get()

      recodeData.forEach(doc => {
        recodeCollection.doc(doc.id).set({
          ...recode
        });
      })

      return await syncRecode();
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }
  }
);

export const slice = createSlice({
  name: '@src/models/recode',
  initialState,
  reducers: {
  },
  extraReducers: {
    [initRecodeList.fulfilled.type]: (state: IRecodeState, action) => {
      const recodeList = action.payload;
      state.recode.list = recodeList;
    },
    [initRecodeList.rejected.type]: (state: IRecodeState, _action) => {
      state.recode = {
        ...state.recode,
        isFailed: true,
      };
    },
    [updateRecode.fulfilled.type]: (state: IRecodeState, action) => {
      const recodeList = action.payload;
      state.recode.list = recodeList;
    },
    [updateRecode.rejected.type]: (state: IRecodeState, _action) => {
      state.recode = {
        ...state.recode,
        isFailed: true,
      };
    },
  },
});

export const {
} = slice.actions;

const recodeReducer = slice.reducer;
export default recodeReducer;
