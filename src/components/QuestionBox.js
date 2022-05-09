import React, {useState} from 'react'
import {
	Textarea,
	Button, 
	VStack,
	CircularProgress
} from '@chakra-ui/react'

import { useAuth } from '../firebase/useAuth';

export default function QuestionBox({id, callback=()=>{}, color="black" }){
	const auth = useAuth();
	const [answer, setAnswer] = useState('');
	const [loading, setLoading] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const processSubmit = () => {
		if(answer === ''){
			setIsInvalid(true);
		} else {
			setLoading(true);
			let answer_payload = {
				id,
				answer
			}
			auth.saveAnswer(answer_payload).then(() => {
				setLoading(false);
				callback();
			})
		}	
	}
	return (
	<VStack w="100%" h="100%">
        <Textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          isInvalid={isInvalid}
		  color={color}
        />
        <Button
          colorScheme="blue"
          onClick={() => processSubmit()}
          width="100px"
        >
          {loading ? (<CircularProgress />): "Next"}
        </Button>
	</VStack>
	)

}