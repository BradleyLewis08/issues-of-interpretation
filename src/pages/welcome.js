import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

import Navbar from '../nav/navbar';
import { useNavigate } from 'react-router';
import FirstPage from '../pages/firstpage';

export default function Welcome() {
  const navigate = useNavigate();
  return (
	<>
	<Center style={{
		height: '90vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}}>
      <Container maxW={'4xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Issues of Interpretation: {' '} 
            <Text as={'span'} color={'blue.400'}>
  
            </Text>
          </Heading>
          <Heading
            fontWeight={800}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl' }}
            lineHeight={'110%'}>
              <Text as={'span'} color={'blue.400'}>
          A Case Study for Understanding Interpretations of “the Procession of Women”  Painting at Dura Europos </Text></Heading>
          
        <Text style={{fontStyle:'italic', fontSize:20}}>By Rikki W. Liu, Jon-Paul Lapeña, Zoe Hsu, Thuyen Vu, Bradley Lewis, Sachin Thakrar</Text>

          <Text color={'gray.500'}>
          The purpose of this learning module is to develop the learner's knowledge and understanding of the importance of contextualization when viewing and interpreting art. The project particularly focuses on the “Procession of Women” baptistry painting in Dura Europos as a case study of the complexity of constructing interpretations. The learning module guides learners through different levels of contextualization and the content of scholarship focused on analyzing and interpreting this painting. 
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              onClick={() => navigate('/signin')}
              colorScheme={'green'}
              bg={'blue.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}>
              Get Started
            </Button>
            <Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Center>
	</>
  );
}
