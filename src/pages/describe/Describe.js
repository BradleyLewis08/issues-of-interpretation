import React from 'react'
import {
	Center,
	Heading,
	Image,
	VStack,
} from '@chakra-ui/react'

import { useAuth } from '../../firebase/useAuth'
import painting from './painting.png'

export default function Describe(){
	const auth = useAuth()
	console.log(auth.userData);
	return (
		<VStack>
			<Heading>
				Take a moment to observe the painting.
			</Heading>
			<Image src={painting} />
		</VStack>
	)
}