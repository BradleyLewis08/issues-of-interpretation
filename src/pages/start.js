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

  import { useNavigate } from 'react-router';
  import { useAuth } from '../firebase/useAuth';

  import Navbar from '../nav/navbar';
  
  export default function Welcome() {
	const navigate = useNavigate();
	const auth = useAuth();
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
			  color={'blue.400'}
			  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
			  lineHeight={'110%'}>
			  	Welcome, {auth.userData.firstName}.
			</Heading>
			<Stack
			  direction={'column'}
			  spacing={3}
			  align={'center'}
			  alignSelf={'center'}
			  position={'relative'}>
			  <Button
				colorScheme={'green'}
				bg={'blue.400'}
				onClick={() => navigate('/firstpage')}
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
  