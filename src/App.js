import './App.css';
import {Button, Container, Toast} from "react-bootstrap";
import {useState} from "react";

const ExampleToast = ({children}) => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </>
    );
};

function App() {
    return (
        <Container className="p-3">
            <h1 className="header">Flying Club</h1>
            <ExampleToast>
                We now have Toasts
                <span role="img" aria-label="tada">🎉</span>
            </ExampleToast>
        </Container>
    );
}

export default App;
