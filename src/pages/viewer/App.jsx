import React, { useRef } from "react";
import { Viewer } from "./Viewer";
import Delayed from "./Delayed";

import {
  Grid,
  GridItem,
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Center,
  Flex,
  ButtonGroup
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  const apiRef = useRef(null);

  var myMaterials;
  const items = ["acmat_1", "acmat_2", "acmat_3", "acmat_4", "acmat_5", "acmat_6", "acmat_7"];

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
     }
    );
  };

  // Note: Delayed is set to 1ms, intended to be set at 30s (i.e. 30000ms on later version)
  return (
    <div className="App">
      <Flex alignContent='flex-start' justifyContent='flex-start'>
      <Grid
      h = '70%'
      w = '100%'
      templateColumns='repeat(20, 1fr)'
      templateRows='repeat(7, 1fr)'
      gap={5}
      >
        <GridItem colSpan={14} rowSpan = {8} bg = "lightblue" margin = "2%">
        <Center margin = '5%'>
          <Viewer apiRef={apiRef}/>
        </Center>
        </GridItem>
        <GridItem colSpan = {4} rowSpan = {1} bg = "lightblue" margin = "5%">
          <Center margin="5%"><Text>
              Observe this space. Click the "play" button and browse the annotations.
            </Text></Center>
        </GridItem>
        
        <Delayed waitBeforeShow={1}>
        <GridItem colSpan = {4} rowSpan = {1} bg = "lightblue" margin = "5%">
          <Box bg = "lightblue" position="relative">
            <Center>
            <Text>Why don't you try this button?</Text>
            </Center>
            <Center>
            <Button colorScheme='blue' onClick={hidePaintings}>Show/Hide paintings</Button>
            </Center>
          </Box>
        </GridItem>
        <GridItem rowStart = {7} colStart = {15} colEnd = {19} margin = "5%" bg = "lightblue">
        <Center margin = "6%">
          <Button colorScheme='blue' onClick={() => navigate('/ninthpage')}>Next</Button>
        </Center>
        </GridItem>
        </Delayed>
      </Grid>
      </Flex>
    </div>
  );
}

export default App;
