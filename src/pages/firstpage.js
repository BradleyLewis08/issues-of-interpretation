import React from 'react';
<<<<<<< HEAD
import image from "../duraeuropos2.png";
import image2 from "../motherandchild.png";

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
=======
import image from '../duraeuropos.jpeg';

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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
>>>>>>> 31b74e187097b55957009cded148917ccad9b1a2
import SecondPage from '../pages/secondpage';

export default function FirstPage() {
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

<<<<<<< HEAD


  <Heading color={'black'} position="absolute" left="200px" marginRight ='600px' top="200px" marginTop ='0px'>Introduction and Goals </Heading>
  
 <Image src={image2} marginLeft ='900px' marginTop='160px' textAlign='right' position="absolute" alignItems= 'flex-end' width= '200' height= '400' float='right' object-position= 'right'></Image>  
 <Text color={'black'} fontSize= "15px"position="absolute" left="200px" top="250px" textAlign="left" marginRight = '600px' marginBottom ='550px'>If you walked into a museum and saw this artwork, how would you identify the figures in this painting? How would your opinion change if you saw this painting in a Christian church? In a museum, visitors may rely on the label descriptions to understand the background of the painting. On the other hand, in a church context, one would presumably connect the iconography of the painting with the beliefs of the religious culture. In this case, it is possible that one might associate the painting with Mary and Jesus (although it would be incorrect).
 When we turn to ancient artwork we often encounter in museums, we depend on labels to understand the context. Of course, ancient people would have encountered the iconography in their original context and understood its meaning and function. But since we do not have direct access to the communities and beliefs of ancient people, how do we attempt to understand ancient art from their perspective? In a museum, we rely on the short explanations provided by the professionals, which can seem absolute. But these labels can obscure how some art continues to be debated and reinterpreted today in scholarship.
 This project focuses on the Dura Europos painting, “the Procession of Women,” in an exercise that guides the learner in recontextualizing the iconography of the painting. After removing the painting from its gallery context, the learner will explore different levels of contextualization, including a review of scholarly interpretations. The goal is to highlight the historical context, which reveals a diversity of ancient Christianities, and help learners value the complexity of constructing interpretations.
  </Text>
<Button colorScheme='blue' marginLeft ='1200px' marginTop ='595px' onClick={() => navigate('/secondpage')}>Next</Button>



        </div>
        
      );
}
=======
      <Flex alignContent="center" justifyContent="center">
        <Center w="1200px" h="600px" bg="lightblue" margin="100px">
          <Box
            bg="white"
            w="94%"
            h="90%"
            p={4}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              colorScheme="blue"
              marginLeft="1000px"
              marginTop="450px"
              onClick={() => navigate('/secondpage')}
            >
              Next
            </Button>
          </Box>
        </Center>
      </Flex>
    </div>
  );
}
>>>>>>> 31b74e187097b55957009cded148917ccad9b1a2
