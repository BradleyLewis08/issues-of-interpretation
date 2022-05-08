import React from 'react';
import image from "../duraeuropos.jpeg";

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
  import Timeline from '../pages/timeline'
export default function TwelfthPage() {
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
<Center w="1200px" h="600px" bg="lightblue" margin ='100px'>
<Box bg='white' w = '94%' h='90%' p={4} color='white' display= 'flex' alignItems= 'center' justifyContent= 'center'>
<Button colorScheme='blue' marginLeft ='1000px' marginTop ='450px' onClick={() => navigate('/viewer')}>Next</Button>
</Box>
</Center>
</Flex>


        </div>
        
      );
}