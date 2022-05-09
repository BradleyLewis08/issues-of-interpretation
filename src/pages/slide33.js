import React, { useState } from 'react';
import image from '../duraeuropos2.png';
import image2 from '../duraeuropos3.jpeg';
import Subtext from '../components/subtext';
import QuestionBox from '../components/QuestionBox';
import BackgroundDiv from '../components/BackgroundDiv';

import { Container, Text, Image, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../firebase/useAuth';
export default function ThirdPage() {
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
        <Image src={image2} width="150" height="300" />
        <Text color={'black'} fontSize="24px" fontWeight={'bold'}>
          Reexamine:
        </Text>
        <Text color={'black'} fontSize="15px">
          After working through this exercise, how would you apply your new
          knowledge in interpreting this painting? How would you describe the
          painting now?
        </Text>
        <Container w="40%">
          <QuestionBox id="question_6" callback={() => navigate('/slide34')} />
        </Container>
      </VStack>
    </BackgroundDiv>
  );
}
