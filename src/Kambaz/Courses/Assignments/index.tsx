import {GoTriangleDown} from "react-icons/go";
import AssignmentTools from "./AssignmentTools.tsx";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/LessonControlButtons.tsx";
import {ListGroup} from "react-bootstrap";
import {CiSquarePlus} from "react-icons/ci";
import {IoEllipsisVertical} from "react-icons/io5";
import AssignmentsIcon from "./assignmentsIcon.tsx";
import {Link} from "react-router-dom";
import * as db from "../../Database";
import {useParams} from "react-router-dom";


export default function Assignments() {
    const {cid} = useParams();
    const filteredAssignments = db.assignments?.filter((assignment) => assignment.course === cid);



    return (
        <div id="wd-assignments">
            <AssignmentTools/><br/>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2 fs-5"/>
                        Week 1
                        <IoEllipsisVertical className="fs-4 float-end"/>
                        <CiSquarePlus className="fs-4 float-end"/>
                        <span
                            className="badge bg-light text-dark border border-secondary  float-end px-3 py-1 fs-6 me-5 rounded-pill">
                        40% of Total
                        </span>

                    </div>
                    <ListGroup className="wd-lessons rounded-0 ">
                        {filteredAssignments.map((assignment) => (
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                                <div className="me-2 d-flex align-items-center">
                                    <AssignmentsIcon/>
                                </div>
                                <div>

                                    <Link to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                          className="wd-assignment-link text-decoration-none text-dark fw-bold">
                                        {assignment.title}
                                    </Link>
                                    <br/>
                                    <span className="small text-muted">
                                    <span className="text-danger">{assignment.modules}</span> |
                                    <strong> Not available until</strong> {assignment.availability} |
                                    <strong> Due</strong> {assignment.due_date} | {assignment.points} pts
                                </span>
                                </div>

                                <div className="ms-auto">
                                    <ModuleControlButtons/>
                                </div>
                            </ListGroup.Item>
                        ))}

            </ListGroup>
        </ListGroup.Item>
</ListGroup>

</div>
)
    ;
}
