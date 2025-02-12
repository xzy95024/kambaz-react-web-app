import {Link} from "react-router-dom";
import * as db from "../Database";
import {Button, Card, Col, Row} from "react-bootstrap";


export default function Dashboard() {
    const courses = db.courses;
    return (
        <Row id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr/>
            <Row id="wd-dashboard-courses">


                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col className="wd-dashboard-course" style={{width: "300px"}}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <img src="/images/C2.jpg" width="100%" height={160}/>
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                           style={{maxHeight: 100}}>
                                            {course.description} </p>
                                        <Button className="btn btn-primary"> Go</Button>
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Row>
</Row>);
}
