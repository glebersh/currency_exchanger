import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from '../store/slices/currenciesSlice';
import quotesReducer from '../store/slices/quotesSlice';

const store = configureStore({
  reducer: {
    currencyReducer,
    quotesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;