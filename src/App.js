import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import AppRoutes from './Routes';
import { ProvideAuth } from './firebase/useAuth';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProvideAuth>
        <AppRoutes />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default App;
