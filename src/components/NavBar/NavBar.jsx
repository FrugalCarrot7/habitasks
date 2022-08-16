import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>HABITASKS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    // <nav>
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="/">
    //     Home
    //   </Link>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogOut}>
    //     Log Out
    //   </Link>
    // </nav>
  );
}
