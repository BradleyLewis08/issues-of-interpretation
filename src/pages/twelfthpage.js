import React from 'react';
import image2 from '../slide11.png';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Center,
  Flex,
  ButtonGroup,
  VStack,
  Image
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import QuestionBox from '../components/QuestionBox';
import BackgroundDiv from '../components/BackgroundDiv';
export default function TwelfthPage() {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
      <VStack alignItems="center" justifyContent="center" width="100%" height="100%" direction="row">
        <Image
          src={image2}
          width="150"
          height="300"
        />
        <Text
          color={'black'}
          fontSize="15px"
        >
          Does this contextual information affect your understanding of the Baptistry paintings (especially the Procession painting)? If so, how?
        </Text>
        <Container w="40%">
          <QuestionBox id="question_5" callback={() => navigate('/timeline')} />
        </Container>
      </VStack>
    </BackgroundDiv>
  );
}

