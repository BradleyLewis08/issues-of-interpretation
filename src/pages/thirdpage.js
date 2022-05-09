import React, {useState} from 'react';
import image from '../duraeuropos2.png';
import image2 from '../duraeuropos3.jpeg';
import Subtext from '../components/subtext';
import QuestionBox from '../components/QuestionBox';

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
  Image,
  Textarea,
  CircularProgress,
  VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import FourthPage from '../pages/fourthpage';
import { useAuth } from '../firebase/useAuth';
export default function ThirdPage() {

  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const auth = useAuth();
  const processNext = () => {
    if(answer === ''){
      setIsInvalid(true);
    }else{
      setLoading(true);
      let answer_payload = {
        id: "question_1",
        answer: answer
      }
      auth.saveAnswer(answer_payload).then(() => {
        setLoading(false);
        navigate('/viewer');
      })
    }
  }
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '95vh',
      }}
    >
      {/* <Container maxW='5xl' maxH='5xl' bg='blue.600' centerContent>
  <Box padding='4' bg='blue.400' color='black' maxW='lg'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Container> */}
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
    </div>
  );
}
