import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

type CurrencyConversion = {
  symbol: string,
  rate: number,
  amount: number,
  timestamp: number,
};

type CurrencyState = {
  currencyRate: CurrencyConversion,
  loading: boolean,
  error: string | null,
};

type incomingURLParameters = {
  firstCurrency: string,
  secondCurrency: string,
  amount: string,
};

export const getExchangeRate = createAsyncThunk<CurrencyConversion, incomingURLParameters, { rejectValue: string }>(
  'currencies/getExchangeRate',
  async function (urlParams, { rejectWithValue }) {
    const _url = `https://api.twelvedata.com/currency_conversion?symbol=${urlParams.firstCurrency}/${urlParams.secondCurrency}&amount=${urlParams.amount}&apikey=${process.env.REACT_APP_API_KEY}`;
    console.log(_url);
    const result = await fetch(_url);

    if (!result.ok) return rejectWithValue('Server Error!');
    else {
      const data = await result.json();
      return data;
    }
  }
);

const initialState: CurrencyState = {
  currencyRate: {
    symbol: '',
    rate: 0,
    amount: 0,
    timestamp: 0,
  },
  loading: false,
  error: null,
};


const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: builder => (
    builder
      .addCase(getExchangeRate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExchangeRate.fulfilled, (state, action) => {
        state.currencyRate = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  )
});

export default currenciesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
};