import React from 'react';
import image from '../duraeuropos2.png';
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
  VStack,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import EleventhPage from '../pages/eleventhpage';
import BackgroundDiv from '../components/BackgroundDiv';

export default function TenthPage() {
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
        The ancient city of Dura-Europos, located on the Euphrates River in
        present-day Syria, was founded by Greek soldiers in about 300BC and
        subsequently underwent several conquests and shifts in political
        oversight. In about 113BC, Dura came under the control of the Parthian
        Empire, which ruled the city for nearly three centuries. Romans captured
        and occupied Dura-Europos in AD 165, turning the city into a military
        garrison on their empire's eastern frontier. Most of the archaeological
        remains from the site date to this final phase. After a siege in the
        third century AD, Dura fell to the Sasanian Empire and was abandoned
        until its rediscovery in the twentieth century. (YUAG Placard)
      </Text>
      <Button
        mt="30px"
        colorScheme="blue"
        onClick={() => navigate('/eleventhpage')}
        width="100px"
      >
        Next
      </Button>
    </VStack>
    </Center>
  </BackgroundDiv>
  );
}
