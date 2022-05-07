import React from 'react'
import { Chrono } from "react-chrono"
import data from "./data";

export default function Timeline({props}){
	
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
  mode="HORIZONTAL"
/>
			  </div> 

			  </>
	  )
	}