import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const contacts = [{
    firstName: 'Philip', lastName: 'Johnson', address: 'POST 307, University of Hawaii',
    image: 'https://github.com/philipmjohnson.png',
    description: 'I am a Professor of Information and Computer Sciences at the University of Hawaii, Director ' +
      'of the Collaborative Software Development Laboratory, and the CEO of OpenPowerQuality.com.',
  },
  {
    firstName: 'Henri', lastName: 'Casanova', address: 'POST 307, University of Hawaii',
    image: 'https://avatars0.githubusercontent.com/u/7494478?s=460&v=4',
    description: 'I am originally from France. I maintain a list of reports from my surf sessions. I have proof ' +
        'that I ran the Hana relay with an actual Team.',
  },
  {
    firstName: 'Kim', lastName: 'Binsted', address: 'POST 307, University of Hawaii',
    image: 'https://www.ics.hawaii.edu/wp-content/uploads/2013/08/kim_binsted-square-300x300.jpg',
    description: 'Kim Binsted received her BSc in Physics at McGill (1991), and her PhD in Artificial Intelligence' +
        'from the University of Edinburgh (1996). Her thesis topic was the computational modeling and generation of ' +
        'punning riddles, and her program, JAPE (Joke Analysis and Production Engine), generated puns such as ' +
        '"What do you call a Martian who drinks beer? An ale-ien!".',
  },
  ];
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <h2>digits</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/add" key="add">Add Stuff</Nav.Link>,
              <Nav.Link id="list-stuff-nav" as={NavLink} to="/list" key="list">List Contacts</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
