import React from 'react';
import image from '../duraeuropos2.png';
import image2 from '../slide11.png';
import BackgroundDiv from '../components/BackgroundDiv';

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
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import TwelfthPage from '../pages/twelfthpage';

export default function EleventhPage() {
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
            The Dura Europos exhibit at the YUAG presents the Baptistery
            paintings on one wall, with the connecting walls on either side
            containing: (1) On the left: the painted ceiling tiles from the Dura
            Europos Synagogue, and (2) On the right: the partial reconstruction
            of the Mithraeum. The close placement of these artifacts from these
            sites alongside each other reflects also the locations of these
            sites in antiquity. The Mithraeum, Synagogue, and Christian building
            are all located along the western wall of the city.
          </Text>
          <Button
            mt="30px"
            colorScheme="blue"
            onClick={() => navigate('/twelfthpage')}
            width="100px"
          >
            Next
          </Button>
        </VStack>
      </Center>
    </BackgroundDiv>
  );
}
