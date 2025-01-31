// import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function TOC() {
    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link href="#/Labs">Labs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/xzy95024/kambaz-react-web-app/tree/main" target="_blank">My GitHub</Nav.Link>
            </Nav.Item>
            {/*<li><Link to="/Labs/Git">Github</Link></li>*/}
        </Nav>
    );
}