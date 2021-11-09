import './App.css';
import {Accordion, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import PlaneAccordion from "./PlaneAccordion";

const planes = [
    {
        tail: "N29265",
        maintenanceItems: [
            {
                item: "Annual",
                last: "6/3/21",
                due: "6/30/22",
                daysRemaining: 234,
                hoursRemaining: "",
                comment: ""
            },
            {
                item: "ELT Battery Change",
                last: "6/3/21",
                due: "6/30/23",
                daysRemaining: 570,
                hoursRemaining: "",
                comment: "Remote 3/26"
            },
            {
                item: "Airworthiness Directive",
                link: "https://www.federalregister.gov/documents/2017/09/19/2017-16048/airworthiness-directives-ameri-king-corporation-emergency-locator-transmitters",
                last: "6/3/21",
                due: "6/30/22",
                daysRemaining: 234,
                hoursRemaining: "",
                comment: "Ameriking ELT - At Annual"
            },
        ]
    },
    {
        tail: "N9741T",
        maintenanceItems: [
            {
                item: "Annual",
                last: "6/3/21",
                due: "6/30/22",
                daysRemaining: 234,
                hoursRemaining: "",
                comment: ""
            },
        ]
    }
]


function App() {
    return (
        <Container className="p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Airplane Operation Notes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Maintenance</Nav.Link>
                            <Nav.Link href="#notes">Members</Nav.Link>
                            <Nav.Link href="#notes">Weight/Balance</Nav.Link>
                            <NavDropdown title="Links" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://www.goboko.com/">Goboko</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.facebook.com/groups/2296761510590369">Facebook
                                    Site</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Joe</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div> </div>
            <Accordion>
                {planes.map((plane, i) => (
                    <PlaneAccordion plane={plane} key={i}/>
                ))}
            </Accordion>
        </Container>
    );
}

export default App;
