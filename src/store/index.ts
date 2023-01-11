import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from '../store/slices/currenciesSlice';

const store = configureStore({
  reducer: {
    currencyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;