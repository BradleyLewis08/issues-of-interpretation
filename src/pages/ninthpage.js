import React from 'react';
import image from "../duraeuropos2.png";
import image2 from "../slide10.png"
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
import TenthPage from '../pages/tenthpage';
export default function NinthPage() {
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
  <Heading
  color={'black'}
  position="absolute"
  left="580px"
  top="180px"
  textAlign="left"
  >Museum Context</Heading>
  <Text
  color={'black'}
  position="absolute"
  left="170px"
  top="240px"
  textAlign="left"
  marginRight="70px"
  >This specific house church building is located in the ancient city of Dura Europos. The Baptistery wall paintings are currently held and displayed by the <br></br> Yale University Art Gallery.</Text>
<Button colorScheme='blue' marginLeft ='1030px' marginTop ='570px' onClick={() => navigate('/tenthpage')}>
          Next
        </Button>
        <Image src={image2} marginLeft ='40px' marginTop='230px' position="absolute" width= '150' height= '340'></Image>
</Flex>


        </div>
        
      );
}