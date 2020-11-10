import { combineReducers } from 'redux';
import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

// import DetailReducer from '../reducers/DetailReducer';
// import ContentsReducer from '../reducers/ContentsReducer';


const rootReducer = combineReducers({
  // detail: DetailReducer,
  // contents: ContentsReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const devTools =
  process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;

const store = configureStore({
  reducer: rootReducer,
  devTools,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;

