import './App.css';
import {Table, Button} from "react-bootstrap";

export default function MaintItemList({maintList}) {
    if (maintList === null) {
        return <p>Maintenance items not available</p>
    }
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Item</th>
                <th>due</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            {maintList.map((item, i) => (
                <tr key={i}>
                    <td>{item.item}</td>
                    <td>{item.due}</td>
                    <td>
                        <Button variant="outline-primary">View</Button>&nbsp;
                        <Button variant="outline-primary">Edit</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}