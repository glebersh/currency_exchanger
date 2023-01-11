import { Box, FormLabel, Input, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getExchangeRate } from '../../store/slices/currenciesSlice';

const ExchangeForm: React.FC = () => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('JPN');
  const [amount, setAmount] = useState('');
  const dispatch = useAppDispatch();

  const currencyISOCodes =
    ["USD", "RUB",
      "JPY", "EUR",
      "AUD", "HKD",
      "KRW", "MXN",
      "NOK", "PLN",
      "SGD", "CHW"];

  const calculateExchange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(getExchangeRate({ firstCurrency, secondCurrency, amount }));
  };

  return (
    <form onSubmit={(e) => calculateExchange(e)}>
      <FormLabel mt='3em'>Choose currency 1:
        <Select w='200px' value={firstCurrency}
          onChange={(e) => (setFirstCurrency(e.target.value))}>
          {
            currencyISOCodes.map(iso => <option
              value={iso}>
              {iso}</option>)
          }
        </Select>
      </FormLabel>

      <FormLabel mt='3em'>Choose currency 2:
        <Select w='200px' value={secondCurrency}
          onChange={(e) => (setSecondCurrency(e.target.value))}>
          {currencyISOCodes.map(iso => <option
            value={iso}>
            {iso}</option>)}
        </Select>
      </FormLabel>
      <FormLabel>Choose amount:
        <Input type='number' value={amount} w='200px'
          onChange={(e) => setAmount(e.target.value)} />
      </FormLabel>

      <Input type='submit' w='80%'
        value='Calculate the exchange rate'
        disabled={firstCurrency === secondCurrency} />
    </form >
  )
};
export default ExchangeForm;