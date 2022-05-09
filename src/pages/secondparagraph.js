import React from 'react';
import image from '../duraeuropos2.png';
import image2 from '../motherandchild.png';

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
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import BackgroundDiv from '../components/BackgroundDiv';

export default function FirstPage() {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
      <Center>
        <VStack
          textAlign="center"
          width="50%"
          height="100%"
          justifyContent="center"
          justifySelf={'center'}
          mt="20vh"
        >
          <Image src={image2} width="150" height="300" />
          <Text color={'black'} fontSize="15px" alignSelf="center">
          When we turn to ancient artwork we often encounter in museums, we depend on labels to understand the context. Of course, ancient people would have encountered the iconography in their original context and understood its meaning and function. But since we do not have direct access to the communities and beliefs of ancient people, how do we attempt to understand ancient art from their perspective? In a museum, we rely on the short explanations provided by the professionals, which can seem absolute. But these labels can obscure how some art continues to be debated and reinterpreted today in scholarship, and thus, nuances are lost.  
          </Text>
          <Button
            mt="30px"
            colorScheme="blue"
            onClick={() => navigate('/firstpage3')}
            width="100px"
          >
            Next
          </Button>
        </VStack>
      </Center>
    </BackgroundDiv>
  );
}
