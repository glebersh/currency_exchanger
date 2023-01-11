import { Box, Input, Spinner, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/useAppSelector";

const ExhchangeResult = () => {
  const exchangeResult = useAppSelector(state => state.currencyReducer.currencyRate);
  const loadingStatus = useAppSelector(state => state.currencyReducer.loading);
  const errorStatus = useAppSelector(state => state.currencyReducer.error);

  const unixTimeConverter = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };


  return (
    <>
      {loadingStatus && <Spinner />}
      {errorStatus && <h1>Alert</h1>}
      {!loadingStatus && !errorStatus &&
        <Box>
          <Text>Exchange rate for {exchangeResult?.symbol} on {unixTimeConverter(exchangeResult?.timestamp)} is: </Text>
          <Input type='number' value={(exchangeResult?.amount).toFixed(2)} />
        </Box>}
    </>
  )
};
export default ExhchangeResult;