import ExchangeForm from "../ExchangeForm/ExchangeForm";
import ExhchangeResult from "../ExchangeResult/ExchangeResult";
import Header from "../Header";
import './App.css';

import { Flex } from '@chakra-ui/react';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Flex>
        <ExchangeForm />
        <ExhchangeResult />
      </Flex>
    </>
  )
};
export default App;