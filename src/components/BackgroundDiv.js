import React from 'react'
import image from '../duraeuropos2.png';

export default function BackgroundDiv({children}){
	return (
	<div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '95vh',
		alignItems: 'center',
		justifyContent: 'center',
      }}
    >
	  {children}
	</div>
	)
}

