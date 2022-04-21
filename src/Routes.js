import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import Welcome from './pages/welcome';
import Signup from  './pages/authentication/signup';
import Navbar from './nav/navbar';
import Start from './pages/start'

export default function AppRoutes(){
	return (
		<Router>
		<>
			<Navbar />
			<Routes>
				<>
					<Route path="/" element={<Welcome />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/start" element={<Start />} />
				</>
				{/* <Route path="/login" element={<Login />} /> */}
			</Routes>
		</>
		</Router>
	);
} 