import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer.ts";
import { enrollStudent, unenrollStudent } from "../Enrollments/reducer.ts"; // New import

export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { enrollments } = useSelector((state: any) => {
        return state.enrollmentsReducer;
    }); //

    const dispatch = useDispatch();

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/C2.jpg",
        description: "New Description",
    });

    const [showAllCourses, setShowAllCourses] = useState(false); // Toggle for showing all courses

    const handleAddCourse = () => {
        const newCourse = { ...course, _id: crypto.randomUUID() };
        dispatch(addCourse(newCourse));
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse(course));
    };

    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
    };

    const handleEnroll = (courseId: string) => {
        dispatch(enrollStudent({ user: currentUser._id, course: courseId }));
    };

    const handleUnenroll = (courseId: string) => {
        dispatch(unenrollStudent({ user: currentUser._id, course: courseId }));
    };

    // Filter courses based on enrollment toggle
    const filteredCourses = showAllCourses
        ? courses
        : courses.filter((course) =>
            enrollments.some(
                (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
            )
        );

    return (
        <Row id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {currentUser?.role === "FACULTY" ? (
                <div>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" onClick={handleAddCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        value={course.description}
                        rows={3}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </div>
            ) : (
                <Button
                    variant="primary"
                    className="float-end mb-2"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                </Button>
            )}

            <h2 id="wd-dashboard-published">Courses ({filteredCourses.length})</h2>
            <hr />

            <Row id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {filteredCourses.map((course) => (
                        <Col className="wd-dashboard-course m-2" style={{ width: "300px" }} key={course._id}>
                            <Card style={{ width: "300px", height: "600px" }}>
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img src="/images/C2.jpg" width="192" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        {currentUser?.role === "FACULTY" && (
                                            <div className="d-flex align-items-center" style={{ position: "absolute", bottom: "40px", left: "40px", right: "10px" }}>
                                                <Button className="btn btn-primary me-lg-5"> Go</Button>

                                                <Button className="btn btn-danger float-end me-1" onClick={(e) => { e.preventDefault(); handleDeleteCourse(course._id); }}>
                                                    Delete
                                                </Button>

                                                <Button className="btn btn-warning float-end" onClick={(e) => { e.preventDefault(); setCourse(course); }}>
                                                    Edit
                                                </Button>
                                            </div>
                                        )}
                                        {currentUser?.role === "STUDENT" && (
                                            <div style={{ position: "absolute", bottom: "40px", left: "10px", right: "10px" }}>
                                            <Button
                                                className={enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id)
                                                    ? "btn btn-danger w-100 mt-auto"
                                                    : "btn btn-success w-100 mt-auto"}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                    enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id)
                                                        ? handleUnenroll(course._id)
                                                        : handleEnroll(course._id);
                                                }}
                                            >
                                                {enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id)
                                                    ? "Unenroll"
                                                    : "Enroll"}
                                            </Button>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Row>
        </Row>
    );
}
