import React from 'react';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Nav from './components/static/Nav';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import Footer from './components/static/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { AuthProvider } from './components/context/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/detail/:id" element={<Detail />} />
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/admin" element={<Admin />}></Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
			<Footer />
		</>
	);
}
export default App;
