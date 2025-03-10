import {Button,} from "react-bootstrap";
import {FaPlus} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import {useNavigate, useParams} from "react-router-dom";



export default function AssignmentTools() {
    const navigate = useNavigate();
    const { cid } = useParams();
    return (
        <div id="wd-assignment-controls" className="d-flex align-items-center gap-2">
            <div className="input-group me-3" style={{width: "350px", height: "38px"}}>
                <span className="input-group-text d-flex align-items-center"><CiSearch/></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    id="wd-search-assignment"
                />
            </div>

            <div className="d-flex d-none d-md-flex flex-row-reverse gap-2 ms-auto">
                <Button
                    variant="danger"
                    size="sm"
                    className="d-flex align-items-center px-3"
                    id="wd-add-assignment-btn"
                    onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
                    <FaPlus className="me-1 fs-6"/>
                    Assignment
                </Button>

                <Button
                    variant="secondary"
                    size="sm"
                    className="d-flex align-items-center px-3"
                    id="wd-add-group">
                    <FaPlus className="me-1 fs-6"/>
                    Group
                </Button>
            </div>


        </div>
    );
}