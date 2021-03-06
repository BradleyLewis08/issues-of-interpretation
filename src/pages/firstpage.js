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
            If you walked into a museum and saw this artwork, how would you
            identify the figures in this painting? How would your opinion change
            if you saw this painting in a Christian church? In a museum,
            visitors may rely on the label descriptions to understand the
            background of the painting. On the other hand, in a church context,
            one would presumably connect the iconography of the painting with
            the beliefs of the religious culture. In this case, it is possible
            that one might associate the painting with Mary and Jesus (although
            it would be incorrect).
          </Text>
          <Button
            mt="30px"
            colorScheme="blue"
            onClick={() => navigate('/firstpage2')}
            width="100px"
          >
            Next
          </Button>
        </VStack>
      </Center>
    </BackgroundDiv>
  );
}
