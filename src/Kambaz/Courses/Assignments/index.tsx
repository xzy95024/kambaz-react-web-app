import { GoTriangleDown } from "react-icons/go";
import AssignmentTools from "./AssignmentTools.tsx";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/LessonControlButtons.tsx";
import {ListGroup} from "react-bootstrap";
import {CiSquarePlus} from "react-icons/ci";
import {IoEllipsisVertical} from "react-icons/io5";
import AssignmentsIcon from "./assignmentsIcon.tsx";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentTools /><br/>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2 fs-5"/>
                        Week 1
                        <IoEllipsisVertical className="fs-4 float-end" />
                        <CiSquarePlus className="fs-4 float-end"/>
                        <span className="badge bg-light text-dark border border-secondary  float-end px-3 py-1 fs-6 me-5 rounded-pill">
                        40% of Total
                        </span>

                    </div>
                    <ListGroup className="wd-lessons rounded-0 ">

                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">

                            <div className="me-2 d-flex align-items-center">
                                <AssignmentsIcon/>
                            </div>
                            <div>
                                <Link to="/Kambaz/Courses/0000/Assignments/A1"
                                      className="wd-assignment-link text-decoration-none text-dark fw-bold">
                                    A1 - ENV + HTML
                                </Link>
                                <br/>
                                <span className="small text-muted">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 6 at 12:00am |
                                    <strong> Due</strong> May 13 at 11:59pm | 100 pts
                                </span>
                            </div>

                            <div className="ms-auto">
                                <ModuleControlButtons/>
                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">

                            <div className="me-2 d-flex align-items-center">
                                <AssignmentsIcon/>
                            </div>
                            <div>

                                <Link to="/Kambaz/Courses/0000/Assignments/A2"
                                      className="wd-assignment-link text-decoration-none text-dark fw-bold">
                                    A1 - ECSS + BOOTSTRAP
                                </Link>
                                <br/>
                                <span className="small text-muted">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 13 at 12:00am |
                                    <strong> Due</strong> May 20 at 11:59pm | 100 pts
                                </span>
                            </div>

                            <div className="ms-auto">
                                <ModuleControlButtons/>
                            </div>

                        </ListGroup.Item>


                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">

                            <div className="me-2 d-flex align-items-center">
                                <AssignmentsIcon />
                            </div>
                            <div>
                                <Link to="/Kambaz/Courses/0000/Assignments/A3"
                                      className="wd-assignment-link text-decoration-none text-dark fw-bold">
                                    A3 - JAVASCRIPT + REACT
                                </Link>
                                <br/>
                                <span className="small text-muted">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 20 at 12:00am |
                                    <strong> Due</strong> May 27 at 11:59pm | 100 pts
                                </span>
                            </div>

                            <div className="ms-auto">
                                <ModuleControlButtons/>
                            </div>

                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
}
