import React, { useEffect, useState } from 'react';
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
  const auth = useAuth();
  const [question, setQuestion] = useState(null);
  useEffect(() => {
	auth.fetchQuestionData().then((data) => {
		setQuestion(data.question_1);
	})
  }, [])

  return question && (
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
		  Recall your answer to question 1:
        </Text>
		<Text as='i'>
			{question}
		</Text>
        <Text marginTop="24px" color={'black'} fontSize="15px">
		How did your answer change? What helped (or did not help) you the most?
        </Text>
        <Container w="40%">
          <QuestionBox id="question_6" callback={() => navigate('/thankyou')} />
        </Container>
      </VStack>
    </BackgroundDiv>
  );
}
