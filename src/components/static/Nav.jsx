import React, { useContext, useState } from 'react';
import AuthContext from '../context/Auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Navbar, Row, Col, Nav, Button } from 'react-bootstrap';

function NavBar() {
	const history = useNavigate();
	const [auth, setAuth] = useContext(AuthContext);
	const [showed, setShowed] = useState(false);

	function logout() {
		setAuth(null);
		history('/');
		setShowed(false);
	}
	return (
		<>
			<Navbar bg="dark" expand="lg" expanded={showed} variant="dark">
				<Container>
					<Row>
						<Col>
							<Navbar.Brand href="/">the banana store</Navbar.Brand>
						</Col>
						<Col>
							<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowed(showed ? false : 'show')} />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<NavLink to="/" end className="btn btn-warning" onClick={() => setShowed(false)}>
										Home
									</NavLink>
									<NavLink to="/contact" className="btn btn-warning" onClick={() => setShowed(false)}>
										Contact
									</NavLink>
									{auth ? (
										<>
											|{' '}
											<NavLink to="/admin" className="btn btn-warning" onClick={() => setShowed(false)}>
												Admin
											</NavLink>{' '}
											|{' '}
											<Button onClick={logout} className="btn btn-primary">
												Log out
											</Button>
										</>
									) : (
										<NavLink to="/login" className="btn btn-primary" onClick={() => setShowed(false)}>
											Login
										</NavLink>
									)}
								</Nav>
							</Navbar.Collapse>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</>
	);
}
export default NavBar;
