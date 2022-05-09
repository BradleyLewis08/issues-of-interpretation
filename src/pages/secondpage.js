import React, { useState, useEffect } from 'react';
import image from '../duraeuropos2.png';
import image2 from '../duraeuropos3.jpeg';
import {
  Text,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import Subtext from '../components/subtext';
export default function SecondPage() {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButtonVisibility(true);
    }, 5000);
  }, []);

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

      <Flex alignContent="center" justifyContent="center">
        <Image
          src={image2}
          marginLeft="20px"
          marginTop="200px"
          textAlign="right"
          position="absolute"
          alignItems="flex-end"
          width="250"
          height="400"
          float="right"
          object-position="right"
        ></Image>
        <Subtext>
          Please take a moment to observe the painting.
        </Subtext>
          {buttonVisibility && (
          <Button colorScheme='blue' marginLeft ='1030px' marginTop ='650px' onClick={() => navigate('/thirdpage')}>
            Next
          </Button>
          )}
      </Flex>
    </div>
  );
}
