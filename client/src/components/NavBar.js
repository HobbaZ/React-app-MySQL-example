import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>

          <Navbar.Brand as={Link} to='/'>
            Example App
          </Navbar.Brand>

            <Nav className='ml-auto'>

            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/signup'>Home</Nav.Link>

              {/* if user is logged in show profile and logout tabs*/}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                
                <>
              {/*Else show login and singup links*/}
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
            </>
              )}
            </Nav>

        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;