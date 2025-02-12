// import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item"><a id="wd-a" href="#/Labs" className="nav-link">Labs</a></li>
            <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
                                        className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a>
            </li>
            <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
                                        className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a>
            </li>
            <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
                                        className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a>
            </li>
            <li className="nav-item"><a id="wd-k" href="#/Kambaz" className="nav-link">Kambaz</a></li>
            <li className="nav-item"><a id="wd-github" href="https://github.com/xzy95024/kambaz-react-web-app/tree/main" target="_blank"
                                        className="nav-link">My GitHub</a></li>
        </ul>
    // <Nav variant="pills">
    //     <Nav.Item>
    //         <Nav.Link href="#/Labs">Labs</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="https://github.com/xzy95024/kambaz-react-web-app/tree/main" target="_blank">My
    //             GitHub</Nav.Link>
    //     </Nav.Item>
    //     {/*<li><Link to="/Labs/Git">Github</Link></li>*/}
    // </Nav>
)
    ;
}