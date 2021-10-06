import './App.css';
import {Container, Accordion, Card} from "react-bootstrap";

function App() {
    return (
        <Container className="p-3">
            <h1 className="header">Airplane Maintenance and Operation Notes</h1>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default App;
