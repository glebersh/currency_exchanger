import ExchangeForm from "../ExchangeForm/ExchangeForm";
import ExhchangeResult from "../ExchangeResult/ExchangeResult";
import Header from "../Header";
import './App.css';

import { Flex } from '@chakra-ui/react';
import QuoteCard from "../CompanyQuote/CompanyQuote";

const companies = [
  "AAPL", "TCS",
  "AAL", "META",
  "WBD"
];


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Flex>
        <ExchangeForm />
        <ExhchangeResult />
      </Flex>
      <Flex>
        {/* <QuoteCard
          initialCompany={companies[0]}
          companies={companies} />
        <QuoteCard
          initialCompany={companies[1]}
          companies={companies} />
        <QuoteCard
          initialCompany={companies[2]}
          companies={companies} /> */}
        {/* <QuoteCard
          initialCompany={companies[3]}
          companies={companies} />
        <QuoteCard
          initialCompany={companies[4]}
          companies={companies} /> */}
      </Flex>
    </>
  )
};
export default App;