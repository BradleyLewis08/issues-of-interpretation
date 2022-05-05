import React from 'react'
import { Chrono } from "react-chrono"

export default function Timeline({props}){
	const items1 = [{
		title: "May 1940",
		cardTitle: "1",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "2",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "3",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "4",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "5",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "7",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  }
	];

	const items2 = [{
		title: "May 1940",
		cardTitle: "8",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "9",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "10",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "11",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "12",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  },
	  {
		title: "May 1940",
		cardTitle: "13",
		url: "http://www.history.com",
		cardSubtitle:"dura europos",
		cardDetailedText: "issues of interpretation",
		media: {
		  type: "IMAGE",
		  source: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg"
		  }
		}
	  }
	];
  
	  return (

<> <div style={{width: "1000px", height: "500px"}}>
	<Chrono
		align={'center'}
		justify={'center'}
			items={items1}
theme={{
primary: "black",
secondary: "#d5f4e6",
cardBgColor: "#80ced6",
cardForeColor: "#80ced6",
titleColor: "#618685"
  }}
  margin ='100px'
  mode="HORIZONTAL"
/>

		  </div><div style={{ width: "1000px", height: "500px"}}>
		  <Chrono
		  align={'center'}
		  justify={'center'}
  items={items2}
  theme={{
    primary: "black",
    secondary: "#d5f4e6",
    cardBgColor: "#80ced6",
    cardForeColor: "#80ced6",
    titleColor: "#618685"
  }}
  mode="HORIZONTAL"
  margin ='100px'
/>
			  </div> </>
	  )
	}