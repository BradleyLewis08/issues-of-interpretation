import React from 'react';
import image from "../duraeuropos2.png";
import image2 from '../duraeuropos3.jpeg';

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
    Image
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router';
import FourthPage from '../pages/fourthpage';
export default function ThirdPage() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", width: '100vw',
    height: '95vh'}}>
        {/* <Container maxW='5xl' maxH='5xl' bg='blue.600' centerContent>
  <Box padding='4' bg='blue.400' color='black' maxW='lg'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Container> */}
<Flex alignContent="center" justifyContent="center">
        <Image
          src={image2}
          marginLeft="20px"
          marginTop="150px"
          textAlign="right"
          position="absolute"
          alignItems="flex-end"
          width="150"
          height="300"
          float="right"
          object-position="right"
        ></Image>
        <Text
          color={'black'}
          fontSize="15px"
          position="absolute"
          left="400px"
          top="520px"
          textAlign="left"
        >
          Describe the painting you see here. What is the material? What are the contents of the painting?
        </Text>
        <Button colorScheme='blue' marginLeft ='1030px' marginTop ='570px' onClick={() => navigate('/fourthpage')}>
          Next
        </Button>
      </Flex>


        </div>
        
      );
}