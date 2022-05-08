import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
  } from '@chakra-ui/react';

  import { useState } from 'react';
  import { useNavigate } from 'react-router';

  import { useAuth } from '../../firebase/useAuth';
  
  export default function Signin() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const auth = useAuth();
	return (
	  <Flex
		minH={'100vh'}
		align={'center'}
		justify={'center'}
		bg={useColorModeValue('gray.50', 'gray.800')}>
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
		  <Stack align={'center'}>
			<Heading fontSize={'4xl'}>Sign in</Heading>
		  </Stack>
		  <Box
			rounded={'lg'}
			bg={useColorModeValue('white', 'gray.700')}
			boxShadow={'lg'}
			p={8}>
			<Stack spacing={4}>
			  <FormControl id="email">
				<FormLabel>Email address</FormLabel>
				<Input 
					type="email" 
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			  </FormControl>
			  <FormControl id="password">
				<FormLabel>Password</FormLabel>
				<Input type="password" 
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			  </FormControl>
			  <Stack spacing={10}>
				<Stack
				  direction={{ base: 'column', sm: 'row' }}
				  align={'start'}
				  justify={'space-between'}>
				  <Checkbox>Remember me</Checkbox>
				  <Link color={'blue.400'}>Forgot password?</Link>
			</Stack>
				<Button
				  onClick = {() => auth.signin(email, password).then(() => {
					navigate('/');
				  })}
				  bg={'blue.400'}
				  color={'white'}
				  _hover={{
					bg: 'blue.500',
				  }}>
				  Sign in
				</Button>
			  </Stack>
			</Stack>
		  </Box>
		</Stack>
	  </Flex>
	);
  }