import React, {useState} from 'react';
import image from '../duraeuropos2.png';
import image2 from '../duraeuropos3.jpeg';
import Subtext from '../components/subtext';
import QuestionBox from '../components/QuestionBox';
import BackgroundDiv from '../components/BackgroundDiv';

import {
  Container,
  Text,
  Image,
  VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../firebase/useAuth';
export default function ThirdPage() {
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
          Describe the painting you see here. What is the material? What are the
          contents of the painting?
        </Text>
        <Container w="40%">
          <QuestionBox id="question_1" callback={() => navigate('/viewer')} />
        </Container>
      </VStack>
    </BackgroundDiv>
  );
}
