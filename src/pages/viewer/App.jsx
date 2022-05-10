import React, { useRef, useEffect, useState, useCallback} from 'react';
import { Viewer } from './Viewer';

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
  const navigate = useNavigate();
  const apiRef = useRef(null);
  const [count, setCount] = useState(0); 

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 5000);

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setQuestionsVisible(true);
    }, 10000)
  });

  var myMaterials;
  var myAnnotations;
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
    } else if (currentQuestion === questions.length - 2) {
      AddAllAnnotations();
      setCurrentQuestion(currentQuestion + 1);
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

  const AddAllAnnotations = () => {
    apiRef.current.createAnnotation(
      [1.7369768904, 4.1571346514, 2.2901712419],
      [3.3823096487, 4.2734934537, 1.6505460942],
      [4.1913177116, 4.2265538242, 1.5995266398],
      [3.3823096487, 4.2734934537, 1.6505460942],
      "Christian Building",
      "The building originally functioned as a house but was converted into a meeting place for Christians around 230-240 C.E. From the street, the Christians entered their church through an entrance room, which leads to the courtyard or atrium. From the atrium, visitors entered the only room decorated with wall paintings ![](https://i.imgur.com/vuvX9pa.png)",
    );
    apiRef.current.createAnnotation(
      [3.3022404662, 8.109854142, 0.433640876],
      [3.3823096487, 4.2734934537, 1.6505460942],
      [3.2763554116, 3.4739837473, 1.7446645748],
      [3.3823096487, 4.2734934537, 1.6505460942],
      "The Baptistery",
      "This space is highlighted by columns and an arched covering decorated with stars, indicating the central importance of this part of the room. The room is referred to as a Baptistry because the basin in this space was likely a baptistry font",
    );
    apiRef.current.createAnnotation(
      [3.3801760582, 9.8020948204, 2.2283689085],
      [2.9746628163, 7.3247171003, 1.7532099702],
      [2.9728018748, 7.3148971592, 1.752884926],
      [2.9746628163, 7.3247171003, 1.7532099702],
      "The Good Shepherd",
      ""
    );
    apiRef.current.createAnnotation(
      [2.839794301, 9.8493741727, 1.5802075428],
      [3.7077918596, 11.1933417543, 1.8812630743],
      [2.8161395089, 6.4882106477, 1.6888602393],
      [3.7077918596, 11.1933417543, 1.8812630743],
      "Adam and Eve",
      ""
    );
    apiRef.current.createAnnotation(
      [4.8109445395, 7.8659479884, 2.1640462876],
      [4.8112590366, 7.83456229, 2.2450155624],
      [2.301028966, 7.11559108, 2.3192265548],
      [4.8112590366, 7.83456229, 2.2450155624],
      "Healing of Paralyzed Man",
      ""
    );
    apiRef.current.createAnnotation(
      [4.819627488, 6.6761486408, 1.8495123358],
      [3.0104819046, 6.8560279513, 1.8962203695],
      [2.2968526192, 6.8872754144, 1.7560964369],
      [3.0104819046, 6.8560279513, 1.8962203695],
      "Boat scene and Jesus walking on water",
      ""
    );
    apiRef.current.createAnnotation(
      [1.7483400106, 5.7107696538, 1.2386557688],
      [3.7375678678, 5.8581349565, 1.3317148227],
      [4.3237772476, 5.8786547207, 1.4557301272],
      [3.7375678678, 5.8581349565, 1.3317148227],
      "David and Goliath",
      ""
    );
  };

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
