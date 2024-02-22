import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text>
              <a href="#login">Contact</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#login">About</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
