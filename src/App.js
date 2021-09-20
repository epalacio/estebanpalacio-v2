import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/mainContent/mainContent.component';
import Navbar from './components/navbar/navbar.component';
import './index.css';


const App = () => (
	<Router>
	<div>
		<Navbar/>
		<MainContent/>
	</div>
	</Router>
);

export default App;