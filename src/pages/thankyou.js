import React, { useEffect } from 'react';
import image from '../duraeuropos2.png';

import {
  Box,
  Heading,
  Container,
  Text,
  VStack,
  Button
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BackgroundDiv from '../components/BackgroundDiv';

export default function EleventhPage() {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
    <VStack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      direction="row"
    >
      <Text color={'black'} fontSize="24px" fontWeight={'bold'}>
        Thank you! Your responses have been recorded.
      </Text>
      <Button
        mt="30px"
        colorScheme="blue"
        onClick={() => navigate('/')}
        width="100px"
      >
        Restart
      </Button>
    </VStack>
  </BackgroundDiv>
  )
}
