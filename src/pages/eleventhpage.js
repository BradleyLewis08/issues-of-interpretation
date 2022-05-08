import React from 'react';
import image from "../duraeuropos2.png";
import image2 from "../slide11.png";

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
import TwelfthPage from '../pages/twelfthpage';

export default function EleventhPage() {
  const navigate = useNavigate();
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

  
 <Image src={image2} marginLeft ='700px' marginTop='160px' textAlign='right' position="absolute" alignItems= 'flex-end' width= '200' height= '400' float='right' object-position= 'right'></Image>  
 <Text color={'black'} fontSize= "15px"position="absolute" left="200px" top="230px" textAlign="left" marginRight = '800px' marginBottom ='550px'>
 The Dura Europos exhibit at the YUAG presents the Baptistery paintings on one wall, with the connecting walls on either side containing: (1) On the left: the painted ceiling tiles from the Dura Europos Synagogue, and (2) On the right: the partial reconstruction of the Mithraeum. The close placement of these artifacts from these sites alongside each other reflects also the locations of these sites in antiquity. The Mithraeum, Synagogue, and Christian building are all located along the western wall of the city.
  </Text>
<Button colorScheme='blue' marginLeft ='1200px' marginTop ='570px' onClick={() => navigate('/twelfthpage')}>Next</Button>



        </div>
        
      );
}
