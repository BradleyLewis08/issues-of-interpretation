import React from 'react';
import image2 from '../slide10.png';
import BackgroundDiv from '../components/BackgroundDiv';
import QuestionBox from '../components/QuestionBox';
import {
  VStack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export default function NinthPage() {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
      <VStack
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        direction="row"
      >
        <Image src={image2} width="150" height="300" />
        <Text color={'black'} fontSize="15px" alignSelf="center">
          This specific house church building is located in the ancient city of
          Dura Europos. The Baptistery wall paintings are currently held and
          displayed by the <br></br> Yale University Art Gallery.
        </Text>
        <Button
          mt="30px"
          colorScheme="blue"
          onClick={() => navigate('/tenthpage')}
          width="100px"
        >
          Next
        </Button>
      </VStack>
    </BackgroundDiv>
  );
}
