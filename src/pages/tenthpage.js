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
import EleventhPage from '../pages/eleventhpage';

export default function TenthPage() {
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
 The ancient city of Dura-Europos, located on the Euphrates River in present-day Syria, was founded by Greek soldiers in about 300BC and subsequently underwent several conquests and shifts in political oversight. In about 113BC, Dura came under the control of the Parthian Empire, which ruled the city for nearly three centuries. Romans captured and occupied Dura-Europos in AD 165, turning the city into a military garrison on their empire's eastern frontier. Most of the archaeological remains from the site date to this final phase. After a siege in the third century AD, Dura fell to the Sasanian Empire and was abandoned until its rediscovery in the twentieth century. (YUAG Placard)
  </Text>
<Button colorScheme='blue' marginLeft ='1200px' marginTop ='570px' onClick={() => navigate('/eleventhpage')}>Next</Button>



        </div>
        
      );
}
