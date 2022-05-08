import React, { useRef } from "react";
import { Viewer } from "./Viewer";

import {
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

  return (
    <div className="App">
      <Viewer apiRef={apiRef} />
      <Button colorScheme='blue' onClick={hidePaintings}>show/hide paintings</Button>
      <Button colorScheme='blue' onClick={() => navigate('/timeline')}>To Timeline</Button>

    </div>
  );
}

export default App;
