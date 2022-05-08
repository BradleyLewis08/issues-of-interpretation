import React from 'react';
import image from "../duraeuropos2.png";

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
    ButtonGroup
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router';
import SixthPage from '../pages/sixthpage';
export default function FifthPage() {
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

<Flex alignContent='center' justifyContent='center'>
<Button colorScheme='blue' marginLeft ='1030px' marginTop ='570px' onClick={() => navigate('/sixthpage')}>
          Next
        </Button>
</Flex>


        </div>
        
      );
}