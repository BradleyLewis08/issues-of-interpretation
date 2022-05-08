import React from 'react'
import { Chrono } from "react-chrono"
import data from "./data";
import image1 from "./images/image1.png"
import image21 from "./images/image2.1.jpeg"
import image22 from "./images/image2.2.jpeg"
import image3 from "./images/image3.jpeg"
import image4 from "./images/image4.png"
import image5 from "./images/image5.jpeg"
import image6 from "./images/image6.png"
import image7 from "./images/image7.jpeg"
import image8 from "./images/image8.jpeg"
import image9 from "./images/image9.png"
import image10 from "./images/image10.jpeg"
import image11 from "./images/image11.jpeg"
import image12 from "./images/image12.png"
import image13 from "./images/image13.gif"
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
	ButtonGroup,
	Image,
  } from '@chakra-ui/react';
import { left } from '@popperjs/core';
import { useNavigate } from 'react-router';
import Slide33 from '../slide33';
export default function Timeline({props}){
	const navigate = useNavigate();
	  return (

<> 

<div style={{width: "1450px", height: "700px", marginTop:"100px"}}>
	<Chrono
		align={'center'}
		justify={'center'}
			items= {data}
theme={{
primary: "black",
secondary: "#d5f4e6",
cardBgColor: "#80ced6",
cardForeColor: "#80ced6",
titleColor: "#618685"
  }}
  margin ='50px'
  mode="HORIZONTAL">
<div>
    <p><i>Published in Kraeling, The Christian Building.</i> Excavations at Dura-Europos Final Report 8 <br></br>
<b>January 20, 1932:</b> In a diary entry, Clark Hopkins describes the fresco:<br></br>
Pearson and I uncovered frescoes in the morning. The lower-right hand side of the room showed <b>two men</b>, one with a wand like a small palm tree in the right hand and a bowl in the left, the second with a stick or sword in the right, bowl at breast in the left, both advancing toward large white building, pediment style, with a great star over each gable.<br></br>

<b>February 2, 1932:</b> In a diary entry, Hopkins refers to the fresco:<br></br>
A slight rain last night wet the <b>fresco of the Three Kings</b>, but did no damage. We arranged to make the drip (run) further out.<br></br>
<b>February 10, 1932:</b> Report of Hopkins to James Rowland: One may see certainly in the scene as a whole the story of those who came bearing gifts to the new-born Christ. <b>I am inclined to think that the three kings are portrayed, the difference in colors of the faces are portrayed, the different races and the sword or scepter of the second figure symbolizing his earthly rule.</b><br></br>
</p>
<br></br>
<Center><Image src={image1} width= '100' height= '200'></Image></Center>
<Center><Text>Clark Hopkins</Text></Center>

<br></br>
</div>

<div>
Henri Seyrig proposed <b>the processing figures were women going to Jesus’ tomb. </b>Hopkins agreed.<br></br>
<b>March 15, 1932:</b> Hopkins writes in a letter to M. Rostovtzeff:<br></br>
M. Seyrig arrived yesterday for the final "partage" and departed today…Seyrig says <b>he now thinks the fresco of the Bringers of Offerings represents the women coming to the tomb (of Christ) and that accounts for the while blank building.</b><br></br>

<b>April 18, 1932:</b> Hopkins writes in a letter to M. Rostovtzeff:<br></br>
Have been thinking of the fresco of the Offering-Bringers in the Christian Chapel. As you know, on the east wall of the Chapel there are the feet of five personages heading toward the north wall. The north wall starts with the bottom of a door, of which I have sent you no picture, then has a personage or who, then the three with torch and bowl, finally the white building with two stars. <b>I wonder if the whole does not represent a procession to the tomb, those on the east wall outside approaching the door, those on the north wall inside the tomb and approaching the white sarcophagus.</b> The stars would be, of course, a bit hard to explain inside a tomb, but were probably mystic signs.<br></br>
<br></br>
<Center><Image src={image21} width= '50' height= '100'></Image> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<Image src={image22} width= '50' height= '100'></Image></Center>
<Text> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
	Left image: Three sets of feet. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	 Right image: Two sets of feet.</Text>
<br></br>

</div>

<div>
Paul V. C. Baur, <i>Preliminary Report of Fourth Season of Work</i><br></br>
Baur describes the paintings in the baptistery, “The Holy Women at the Sepulchre.” Baur identifies this scene as following <b>the text of the Gospel of Mark</b>, specifically Mark 16:1-2 "[which] mentions three Marys as coming to the tomb to anoint the body. In our picture they carry bowls of myrrh." Baur also notes <b>the bottom of a door on the north wall and states that, "At first glance I thought it might represent the gate leading from Jerusalem." </b> (p. 270)
<br></br>
<Center><Image src={image3} width= '100' height= '200'></Image></Center>
<Center><Text>Baptistry wall painting of door</Text></Center>
<br></br>
</div>

<div>
Gabriel Millet, <i>Doura et El-Bagawat: la parabole des vierges</i> <br></br>
This is a posthumous publication, originally written in 1934-34 and published in 1956. Millet <b>compares the Dura fresco to a painting from the site of El Bagawat, which depicts a procession of seven women.</b> Millet argues that this painting can also be identified as representing <b>the Parable of the Virgins</b>, and likewise identifies the Dura Baptistry painting.
<br></br><br></br><Center><Image src={image4} width= '100' height= '200'></Image></Center><br></br>

</div>

<div>
William Seston, <i>L'église et le baptistère de Doura-Europos</i>
Seston does not argue that the Procession of Women painting directly depicts a Biblical scene. Instead, he suggests that <b>it depicts a liturgical procession of initiates called the Feast of Lights</b> (also known more commonly as the Epiphany, or the celebration of revelation of God incarnated as Jesus Christ.)
<br></br><br></br><Center><Image src={image5} width= '100' height= '200'></Image></Center>
<Center><Text>Example: Epiphany 4
Adoration of the Magi (2ndC) in the Catacomb of Priscilla. This is the earliest known artistic representation of the three wise men.</Text></Center>
</div>

<div>
Joseph Pijoan, <i>The Parable of the Virgins from Dura-Europos</i> <br></br>
Pijoan identifies the sepulcher of the painting as a temple towards which the procession of maidens goes with lighted lamps. <b>The Dura room in which the paintings are found should be considered a temple where virgins of the congregation made unleavened cakes for communion</b>, and the altar with a hole (usually understood as a baptismal font) is actually a table with a bowl used for flour, used to make these cakes. Pijoan's argument for the Parable identification rests largely on the number of figures present in the fresco and connects to his arguments regarding the Christian building because of <b>the ritual parallels between the Parable of the Virgins and the eucharist preparation purpose</b> he argues.
<br></br>
He also identifies the fragmented structure found between the two groups of figures as a door and <b>interprets the figures between the door and the white structure as the wise virgins whom the bridegroom welcomed in and the five figures to the left of the door, the foolish virgins left outside.</b> Pijoan also references frescoes from sites in Italy, Catalan, and Egypt that also depict virgins carrying long, torch-like oil lamps as a point of comparison.
<br></br><br></br>
<Center float="left" width="50%" padding="5px"><Image src={image6}  width= '100' height= '150'></Image></Center>
<Center><Image src={image7} width= '100' height= '150'></Image></Center>
<Center><Text>The Catalan fresco of Pedret</Text></Center>
<br></br>
</div>

<div>
Jeanne Villette, "Que Représente la Grande Fresque de la Maison Chrétienne de Doura"<br></br>
Villette argues that <b>the stars are depictions of the angel in the gospel accounts of an angel being present at Christ's empty tomb. </b>Villette draws from Jewish religious literature to establish the association between angels and celestial objects, and from the hymns of Ephrem the Syrian identifying the angel present at the Annunciation as a star. She makes use of the Syriac term for "angel" or "watcher", 'îkâ, which is also used for a certain type of star described by other ancient authors (Diodorus Siculus). 
<br></br><Center><Image src={image8} width= '100' height= '200'></Image></Center><br></br>
</div>

<div>
André Grabar argues that the Dura painting depicts the women<b> going to the empty tomb of Jesus to anoint his corpse. </b>He responds to the arguments of Gabriel Millet and W. Seston, countering the arguments that the painting depicts the Parable of Virgins (Millet's argument) and that it depicts a procession of initiates during the Feast of Lights (Epiphany) (Seston's argument). Grabar emphasizes that <b>the structure in the Dura painting is comparable to Jewish and Syrian burial customs,</b> and that the sarcophagus represented in the fresco reflects the local styles of largely undecorated sarcophagi and is comparable to rock tombs found in Palestine.
<br></br><Center><Image src={image9} width= '100' height= '200'></Image></Center><br></br>
</div>

<div>
Carl H. Kraeling, <i>The Excavations at Dura-Europos, Final Report VIII, Part II: The Christian Building</i><br></br>
labeled the paintings “The Resurrection Sequence.” <b>Kraeling identifies the white structure as a sarcophagus, and argues that "in the total composition the sarcophagus is clearly intended to play a most important part,"</b> given its dimensions in relation to the entire panel of this fresco. He identifies the figures as women holding torches in their right hands and bowls of unguent in their left, and <b>compares their dress with that depicted in Palmyrene funerary sculpture.</b> Kraeling reviews preceding scholarship on the identification of this painting, responding largely to Baur, but he also references the arguments of Millet and Pijoan. Regarding the stars above the white structure, Kraeling accepts the argument of Jeanne Villette (1953) to further support the "Resurrection Sequence" identification. 
<br></br><br></br><Center><Image src={image10} width= '100' height= '200'></Image></Center><br></br>
</div>

<div>
Annabel Jane Wharton, <i>Refiguring the Post Classical City: Dura Europos, Jerash, Jerusalem, and Ravenna</i><br></br>
Wharton supports multiple possible interpretations of the procession of women. Most relevant for this lesson, is Wharton's emphasis that <b>historians are influenced by their own subjective ideals </b>and will sometimes overlook or dismiss certain historical periods and places, along with their art and artifacts. Wharton also employs the terms <b><i>optic</i> <i>haptic</i>(touching) to analyze and categorize the art of ritual spaces.</b>
</div>

<div>
L. Michael White,<i> Scripting Jesus: The Gospels in Rewrite</i><br></br>
White uses the Greek Diatessaron, <b>"Gospel Harmony,"</b> fragment from the excavation as a means of corroborating the interpretation of the painting as the women approaching the tomb of Christ to anoint his body. The number of annointers (called myrrophores) derives from the harmonization of each of the different gospel accounts of the passion narrative, which results in the total number of five women in the painting despite there being no single gospel account that names five women at the tomb.
<br></br><br></br><Center><Image src={image11} width= '100' height= '200'></Image></Center>
<Center><Text>Parchment found two blocks away from Christian building.</Text></Center><br></br>
</div>

<div>
Sanne Klaver, <i>The Brides of Christ: ‘The Women in Procession’ in the Baptistery of Dura-Europos.</i><br></br>
Klaver argues for identification as the parable of wise and foolish virgins from the Gospel of Matthew (25:1-13). <b>Klaver's argument draws attention to the Diatessaron of Tatian as bearing witness to what kind of Christian tradition was represented at Dura-Europos. </b>Tatian created the gospel harmony by combining and summarizing the four gospels into a single text. Tatian's harmony argues against the teachings of Marcion, who rejected the Old Testament and taught a doctrine of two Gods, and the papyrus fragment of the Diatessaron in Dura Europos provides evidence for Durene Christian adherence to the belief in one God. <b>Klaver also turns to early Christian texts with distinct Eastern (Syrian) origins to address the baptismal rituals that Durene Christians would have practiced. A number of these texts paint baptism as a marriage between Christ and the initiate, and some also refer to initiates wearing white wedding garments for such rituals. </b>Klaver argues that each of the Baptistry paintings can be interpreted with reference to the baptism ritual, and the same applies to the Procession of Women painting as the Parable of the Virgins.
<br></br><br></br><Center><Image src={image11} width= '100' height= '200'></Image></Center>
<Center><Text>Parchment found two blocks away from Christian building.</Text></Center><br></br>
</div>

<div>
Michael Peppard, <i>The World's Oldest Church</i><br></br>
Peppard references or draws on most of the existing scholarship on the Dura Europos Baptistry in his book, which highlights the ritual use of the Baptistry space. <b>He notes a graffito found over the head of the first woman in the procession, which inscribes the name Hera.</b> While Kraeling made note of this graffito, he did not consider it to have any connection to the interpretation of the fresco. Peppard instead imagines the individual who would have entered this space and inscribed her name on the fresco, and considers that she was identifying herself with the figure in the fresco. Ultimately, <b>Peppard analyzes the Procession of Women painting in relation to the Parable of the Virgins, arguing that the wedding-setting of the parable aligns with the prevalence of marriage-based rituals and metaphors for initiation into Syrian Christian communities.</b>
Peppard also argues that the mistaken interpretation of the women at Christ's tomb became prevalent primarily because Kraeling so strongly defended it and dismissed other interpretations in his reports. 
<br></br><br></br><Center><Image src={image12} width= '100' height= '200'></Image></Center><br></br>
</div>

<div>
Blair Fowlkes-Childs and Michael Seymour, <i>The World Between Empires: Art and Identity in the Ancient Middle East<br></br>
The World Between Empires</i> was an exhibition on display at the Metropolitan Museum of Art in New York from March 18 to June 23, 2019. The exhibit featured many pieces of artwork on loan from twenty museums around the world, including pieces from Dura Europos on loan from the Yale University Art Gallery. The exhibition catalogue references and takes up Peppard's arguments regarding the identification of the Procession of Women as the Parable of the Virgins. 
<br></br><br></br><Center><Image src={image13} width= '100' height= '200'></Image></Center><br></br>
<Button colorScheme='blue' marginLeft ='1100px' marginTop ='0px' onClick={() => navigate('/Slide33')}>
          Back to module
        </Button>
</div>
</Chrono>
			  </div> 

			  </>
	  )
	}