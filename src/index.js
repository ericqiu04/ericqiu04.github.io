import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);
