import './App.css';
import {Accordion, Button} from "react-bootstrap";
import MaintItemList from "./MaintItemList";

export default function PlaneAccordion({plane}) {
    if (plane === null) {
        return <p> </p>
    }
    return (
            <Accordion.Item eventKey={plane.tail}>
                <Accordion.Header>{plane.tail}</Accordion.Header>
                <Accordion.Body>
                    <MaintItemList maintList={plane.maintenanceItems}/>
                    <Button variant="outline-primary">Add Maintenance Item</Button>
                </Accordion.Body>
            </Accordion.Item>
    );
}
