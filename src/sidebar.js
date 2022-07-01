import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeadBar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/aboutProfile">About</Nav.Link>
        <Nav.Link href="/experience">Experience</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/interest">Interest</Nav.Link>
        <Nav.Link href="/awards">Awards</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default HeadBar