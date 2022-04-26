import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../image/logo.png'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../config.init';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand as={HashLink} to="/#banner">
                    <img src={logo} height={30} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/#banner">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/#experts">Experts</Nav.Link>

                    </Nav>
                    <Nav>

                        {
                            user && <>
                                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Oredrs</Nav.Link>

                            </>
                        }
                        <Nav.Link className='text-warning' as={Link} to="/about">{user?.displayName}</Nav.Link>

                        {
                            user ?
                                <button onClick={() => signOut(auth)} className='btn btn-danger'>Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;