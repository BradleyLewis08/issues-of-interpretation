import React from 'react'
import {
	Center,
	Heading,
	Image,
} from '@chakra-ui/react'

import { useAuth } from '../../firebase/useAuth'

export default function Describe(){
	const auth = useAuth()
	console.log(auth.userData);
	return (
		<Center>
			<Image src={'painting.png'} />
			<Heading>
				Describe your painting
			</Heading>
		</Center>
	)
}