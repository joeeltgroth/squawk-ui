import './App.css';
import {Container, Accordion, Card, Navbar, Nav, NavDropdown, Button} from "react-bootstrap";

function App() {
    return (
        <Container className="p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Airplane Operation Notes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#notes">Notes</Nav.Link>
                            <Nav.Link href="#notes">Members</Nav.Link>
                            <Nav.Link href="#notes">Weight/Balance</Nav.Link>
                            <NavDropdown title="Links" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://www.goboko.com/">Goboko</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.facebook.com/groups/2296761510590369">Facebook Site</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Joe</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div></div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Archer N29265</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Body>Trim button on yoke inoperable.</Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>Last oil added 9/23 at 2388 tach hours.</Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>Last oil added 9/23 at 2388 tach hours.</Card.Body>
                        </Card>
                        <p>&nbsp;</p>
                        <Button variant="outline-primary">Report Squawk</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tomahawk N9741T</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        <p>&nbsp;</p>
                        <Button variant="outline-primary">Report Squawk</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default App;
