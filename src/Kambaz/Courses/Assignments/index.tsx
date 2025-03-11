import {GoTriangleDown} from "react-icons/go";
import AssignmentTools from "./AssignmentTools.tsx";
import {BsGripVertical} from "react-icons/bs";
import {ListGroup} from "react-bootstrap";
import {CiSquarePlus} from "react-icons/ci";
import {IoEllipsisVertical} from "react-icons/io5";
import AssignmentsIcon from "./assignmentsIcon.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import ProtectedComponent from "../ProtectedComponent";
import {useSelector} from "react-redux";
import DeleteAssignmentButton from "./DeleteButtons.tsx";


export default function Assignments() {
    const { cid } = useParams();
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const filteredAssignments = assignments?.filter((assignment:any) => assignment.course === cid);
    const navigate = useNavigate();


    return (
        <div id="wd-assignments">
            <ProtectedComponent role="FACULTY">
                <AssignmentTools/><br/>
            </ProtectedComponent>

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2 fs-5"/>
                        Week 1
                        <IoEllipsisVertical className="fs-4 float-end"/>
                        <CiSquarePlus className="fs-4 float-end" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}/>
                        <span className="badge bg-light text-dark border border-secondary float-end px-3 py-1 fs-6 me-5 rounded-pill">
                            40% of Total
                        </span>
                    </div>

                    <ListGroup className="wd-lessons rounded-0">
                        {filteredAssignments.map((assignment:any) => (
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                                <div className="me-2 d-flex align-items-center">
                                    <AssignmentsIcon />
                                </div>
                                <div>
                                    {currentUser?.role === "FACULTY" ? (
                                        // ✅ Faculty can click to navigate to the assignment page
                                        <Link to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                              className="wd-assignment-link text-decoration-none text-dark fw-bold">
                                            {assignment.title}
                                        </Link>
                                    ) : (
                                        //  Students see only text, no link
                                        <span className="wd-assignment-link text-dark fw-bold">
                                            {assignment.title}
                                        </span>
                                    )}
                                    <br/>
                                    <span className="small text-muted">
                                        <span className="text-danger">{assignment.modules}</span> |
                                        <strong> Not available until</strong> {assignment.availability} |
                                        <strong> Due</strong> {assignment.due_date} | {assignment.points}
                                    </span>
                                </div>

                                {/* Only Faculty can see edit/delete buttons */}
                                <ProtectedComponent role="FACULTY">
                                    <div className="ms-auto d-flex gap-2">
                                        {/* 🔥 Use the new Delete Button component */}
                                        <DeleteAssignmentButton assignment={assignment} />
                                    </div>
                                </ProtectedComponent>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}