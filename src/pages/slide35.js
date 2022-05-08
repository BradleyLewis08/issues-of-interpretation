import React from 'react';
import image from "../duraeuropos2.png";
import image2 from "../slide35-3.jpeg";
import image3 from "../slide35-4.jpeg";

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
import ThankYou from '../pages/thankyou';

export default function Slide35() {
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



<Heading color={'black'} position="absolute" left="200px" marginRight ='500px' top="180px" marginTop ='0px'>Moving beyond labels in Interpreting Art</Heading>
 <Image src={image2} marginLeft ='1055px' marginTop='160px' textAlign='right' position="absolute" alignItems= 'flex-end' width= '100' height= '150' float='right' object-position= 'right'></Image>  
 <Image src={image3} marginLeft ='1100px' marginTop='350px' textAlign='right' position="absolute" alignItems= 'flex-end' width= '100' height= '200' float='right' object-position= 'right'></Image>  
 <Text color={'black'} fontSize= "15px"position="absolute" left="200px" top="240px" textAlign="left" marginRight = '400px' marginBottom ='550px'>If you walked into a museum and saw this artwork, how would you identify the figures in this painting? How would your opinion change if you saw this painting in a Christian church? In a museum, visitors may rely on the label descriptions to understand the background of the painting. On the other hand, in a church context, one would presumably connect the iconography of the painting with the beliefs of the religious culture. In this case, it is possible that one might associate the painting with Mary and Jesus (although it would be incorrect).
 When we encounter ancient paintings or iconography, we naturally want to understand what is shown and why. In museums, labels are a good start to interpreting the past. But as we have shown in this exercise, interpreting the past by exhibiting objects within gallery categories and descriptions may influence one's interpretations without acknowledging subjectivity and the nuances behind the community and scholarly life of the painting. <br></br>
 The case study of "the Procession of Women" shows how complex interpreting an ancient painting can be. Scholars sometimes do not agree on interpretations, and debates are ongoing. But it also shows how historical context can be vital to interpreting such ancient artwork. And how such historical contextualization, like the consideration of the Diatessaron, brings life to a specific kind of Christian community of that ancient period much different than our own. Additionally, reconstructing the context further than what a museum label can show allows us to imagine the ritual use of the space as a whole and appreciate the artwork differently.<br></br>
 We hope that this exercise, along with your reflections, helped you see art interpretation differently. By applying and integrating the new knowledge into your world, constantly being aware of one's own presuppositions, you can continue to interpret art in an illuminating way.<br></br>

   </Text>
<Button colorScheme='blue' marginLeft ='1200px' marginTop ='570px' onClick={() => navigate('/thankyou')}>Next</Button>



        </div>
        
      );
}
