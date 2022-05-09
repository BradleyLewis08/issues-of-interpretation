import React, { useRef, useEffect, useState } from 'react';
import { Viewer } from './Viewer';
import Delayed from './Delayed';

import {
  VStack,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Center,
  Flex,
  ButtonGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import QuestionBox from '../../components/QuestionBox';

function App() {
  const [visible, setVisible] = useState(false);
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setQuestionsVisible(true);
    }, 10000)
  })

  const navigate = useNavigate();
  const apiRef = useRef(null);

  var myMaterials;
  const items = [
    'acmat_1',
    'acmat_2',
    'acmat_3',
    'acmat_4',
    'acmat_5',
    'acmat_6',
    'acmat_7',
  ];

  const questions = [
    {
      id: 'question_2',
      question: 'How would you describe this room?'
    },
    {
      id: 'question_3',
      question: 'How does the original painting fit in the context of this room? What is it depicting?'
    },
    {
      id: 'question_4',
      question: 'Given what you now know about this room and this building, has your understanding of the painting changed? If so, how?'
    }
  ]

  const questionCallback = () => {
    if(currentQuestion === questions.length - 1){
      navigate('/ninthpage');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const hidePaintings = () => {
    apiRef.current.getMaterialList(function (err, materials) {
      myMaterials = materials;

      for (var i = 0; i < myMaterials.length; i++) {
        var m = myMaterials[i];
        console.log(m.name);
        if (items.includes(m.name)) {
          m.channels.Opacity.factor = 1 - m.channels.Opacity.factor;
          apiRef.current.setMaterial(m);
        }
      }
    });
  };

  // Note: Delayed is set to 1ms, intended to be set at 30s (i.e. 30000ms on later version)
  return (
      <Flex alignContent="flex-start" justifyContent="flex-start">
        <Viewer apiRef={apiRef}></Viewer>
        <Flex direction="column" h="100vh">
          <Text fontSize="xl" fontWeight="bold" color="black">
            Click the play button to observe this space.
          </Text>
          <Text>
            Think about what you notice. A button will appear shortly to allow
            you to view the paintings.
          </Text>
          {visible && (
            <Button
              alignSelf="center"
              w="70%"
              marginTop="20px"
              colorScheme="blue"
              onClick={hidePaintings}
            >
              Show/Hide Paintings
            </Button>
          )}
          {questionsVisible && (<VStack
            justifyContent="center"
            p="20px"
            bg="black"
            alignSelf="center"
            w="60%"
            mt="40px"
          >
              <Text color="white" fontWeight="bold">
                Question:
              </Text>
              <Text color="white">{questions[currentQuestion].question}</Text>
              <QuestionBox id={questions[currentQuestion].id} color="white" callback={() => questionCallback()} />
          </VStack>)}
        </Flex>
      </Flex>
  );
}

export default App;
