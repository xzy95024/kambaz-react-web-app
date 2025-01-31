import { Link } from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">


                    <Row xs={1} md={5} className="g-4">
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0000/Home"
                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C1.jpg" width="100%" height={400}/>
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0000 React JS</Card.Title>
                                        <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0001/Home"
                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C2.jpg" width="100%" height={400}/>
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0001 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software
                                            developer</Card.Text>
                                            <Button variant="primary">Go</Button>
                                    </Card.Body>

                                </Link>
                            </Card>
                        </Col>

                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0002/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C3.jpg" width="100%" height={400} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0002 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0003/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C4.jpg" width="100%" height={400} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0003 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>

                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0004/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C5.jpg" width="100%" height={400} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0004 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>

                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0005/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C6.jpg" width="100%" height={400} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0005 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>

                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/0006/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/C7.jpg" width="100%" height={400} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS0006 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    </Row>


                {/*<div className="wd-dashboard-course">*/}
                {/*    <Link to="/Kambaz/Courses/0002/Home"*/}
                {/*          className="wd-dashboard-course-link">*/}
                {/*        <img src="/images/C3.jpg" width={200}/>*/}
                {/*        <div>*/}
                {/*            <h5> CS0002 React JS </h5>*/}
                {/*            <p className="wd-dashboard-course-title">*/}
                {/*                Full Stack software developer </p>*/}
                {/*            <button> Go</button>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="wd-dashboard-course">*/}
                {/*    <Link to="/Kambaz/Courses/0003/Home"*/}
                {/*          className="wd-dashboard-course-link">*/}
                {/*        <img src="/images/C4.jpg" width={200}/>*/}
                {/*        <div>*/}
                {/*            <h5> CS0003 React JS </h5>*/}
                {/*            <p className="wd-dashboard-course-title">*/}
                {/*                Full Stack software developer </p>*/}
                {/*            <button> Go</button>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="wd-dashboard-course">*/}
                {/*    <Link to="/Kambaz/Courses/0004/Home"*/}
                {/*          className="wd-dashboard-course-link">*/}
                {/*        <img src="/images/C5.jpg" width={200}/>*/}
                {/*        <div>*/}
                {/*            <h5> CS0004 React JS </h5>*/}
                {/*            <p className="wd-dashboard-course-title">*/}
                {/*                Full Stack software developer </p>*/}
                {/*            <button> Go</button>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="wd-dashboard-course">*/}
                {/*    <Link to="/Kambaz/Courses/0005/Home"*/}
                {/*          className="wd-dashboard-course-link">*/}
                {/*        <img src="/images/C6.jpg" width={200}/>*/}
                {/*        <div>*/}
                {/*            <h5> CS0005 React JS </h5>*/}
                {/*            <p className="wd-dashboard-course-title">*/}
                {/*                Full Stack software developer </p>*/}
                {/*            <button> Go</button>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="wd-dashboard-course">*/}
                {/*    <Link to="/Kambaz/Courses/0006/Home"*/}
                {/*          className="wd-dashboard-course-link">*/}
                {/*        <img src="/images/C7.jpg" width={200}/>*/}
                {/*        <div>*/}
                {/*            <h5> CS0006 React JS </h5>*/}
                {/*            <p className="wd-dashboard-course-title">*/}
                {/*                Full Stack software developer </p>*/}
                {/*            <button> Go</button>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
