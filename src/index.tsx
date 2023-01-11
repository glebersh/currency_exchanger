import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import store from './store/index';
import theme from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ChakraProvider>
);
