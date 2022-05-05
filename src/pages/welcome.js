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
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Issues of{' '} 
            <Text as={'span'} color={'blue.400'}>
             interpretation 
            </Text>
          </Heading>
          <Text color={'gray.500'}>
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              onClick={() => navigate('/firstpage')}
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
