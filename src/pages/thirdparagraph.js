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
            This project focuses on the Dura Europos painting, “the Procession
            of Women,” in an exercise that guides the learner in
            recontextualizing the iconography of the painting. After removing
            the painting from its gallery context, the learner will explore
            different levels of contextualization, including a review of
            scholarly interpretations. The goal is to highlight the historical
            context, which reveals a diversity of ancient Christianities, and
            help learners value the complexity of constructing interpretations.
          </Text>
          <Button
            mt="30px"
            colorScheme="blue"
            onClick={() => navigate('/secondpage')}
            width="100px"
          >
            Next
          </Button>
        </VStack>
      </Center>
    </BackgroundDiv>
  );
}
