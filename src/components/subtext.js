import React from 'react';
import { Text } from '@chakra-ui/react';

export default function Subtext({ children }) {
  return (
    <Text
      color={'black'}
      fontSize="18px"
      position="absolute"
      left="620px"
      top="680px"
      textAlign="center"
      fontWeight={'bold'}
    >
      {children}
    </Text>
  );
}
