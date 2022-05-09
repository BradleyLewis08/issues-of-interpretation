import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Navigate,
	Route,
} from 'react-router-dom';

import Welcome from './pages/welcome';
import Signup from  './pages/authentication/signup';
import Signin from './pages/authentication/signin';
import Navbar from './nav/navbar';
import Start from './pages/start'
import Describe from './pages/describe/Describe';
import Timeline from './pages/timeline'
import Viewer from './pages/viewer'
import FirstPage from './pages/firstpage';
import SecondPage from './pages/secondpage';
import ThirdPage from './pages/thirdpage';
import FourthPage from './pages/fourthpage';
import FifthPage from './pages/fifthpage';
import SixthPage from './pages/sixthpage';
import SeventhPage from './pages/seventhpage';
import EighthPage from './pages/eighthpage';
import NinthPage from './pages/ninthpage';
import TenthPage from './pages/tenthpage';
import TwelfthPage from './pages/twelfthpage';
import EleventhPage from './pages/eleventhpage';
import Slide34 from './pages/slide34';
import Slide35 from './pages/slide35';
import ThankYou from './pages/thankyou';

import { useAuth } from './firebase/useAuth';

export default function AppRoutes(){
	const auth = useAuth();
	return (
		<Router>
		<>
			<Navbar />
			<Routes>
				{ auth.userData ? (
					<>
					<Route path="/" element={<Start />} />
					<Route path="/describe" element={<Describe />} />
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/viewer" element={<Viewer />} />
					<Route path="/firstpage" element={<FirstPage />} />
					<Route path="/secondpage" element={<SecondPage />} />
					<Route path="/thirdpage" element={<ThirdPage />} />
					<Route path="/fourthpage" element={<FourthPage />} />
					<Route path="/fifthpage" element={<FifthPage />} />
					<Route path="/sixthpage" element={<SixthPage />} />
					<Route path="/seventhpage" element={<SeventhPage />} />
					<Route path="/eighthpage" element={<EighthPage />} />
					<Route path="/ninthpage" element={<NinthPage />} />
					<Route path="/tenthpage" element={<TenthPage />} />
					<Route path="/eleventhpage" element={<EleventhPage />} />
					<Route path="/twelfthpage" element={<TwelfthPage />} />
					<Route path="/thankyou" element={<ThankYou />} />
					</>
				) : (
					<>
						<Route path="/" element={<Welcome />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/signin" element={<Signin />} />
					</>
				)
			}
			</Routes>
		</>
		</Router>
	);
} 