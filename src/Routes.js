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
import Timeline from './pages/timeline'
import Viewer from './pages/viewer'
import FirstPage from './pages/firstpage';
import SecondPage from './pages/secondpage';
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
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/viewer" element={<Viewer />} />
					<Route path="/firstpage" element={<FirstPage />} />
					<Route path="/secondpage" element={<SecondPage />} />
				</>
				{/* <Route path="/login" element={<Login />} /> */}
			</Routes>
		</>
		</Router>
	);
} 