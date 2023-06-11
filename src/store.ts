import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from "./features";

const store =  configureStore( {
  reducer: {
    counter: counterReducer
  }
} );

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export default store;

