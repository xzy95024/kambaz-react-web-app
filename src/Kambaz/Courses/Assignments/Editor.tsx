import {Button, Card, Form} from "react-bootstrap";
import * as db from "../../Database";
import {useParams, useNavigate} from "react-router-dom";
import Select from "react-select";
import { parse, format } from "date-fns"; // Import date-fns for formatting

// Options for the "Assign To" dropdown
const options = [
    { value: "Everyone", label: "Everyone" },
    { value: "Option2", label: "Option2" },
    { value: "Option3", label: "Option3" }
];

export default function AssignmentEditor() {
    // Retrieve course ID (cid) and assignment ID (aid) from URL parameters
    const { cid, aid } = useParams();

    // Find the assignment object based on the provided assignment ID
    const assignment = db.assignments.find((assignment) => assignment._id === aid);

    // Format due date and availability date for input fields
    const formattedDueDate = format(
        parse(assignment.due_date, "MMM dd yyyy hh:mma", new Date()),
        "yyyy-MM-dd'T'HH:mm"
    );
    const formattedStartDate = format(
        parse(assignment.availability, "MMM dd yyyy hh:mma", new Date()),
        "yyyy-MM-dd'T'HH:mm"
    );
    const navigate = useNavigate();

    return (
        <div id="wd-assignments-editor">
            <br/><br/>
            <div>
                {/* Assignment Name Input */}
                <label htmlFor="wd-name">Assignment Name</label><br/>
                <input id="wd-name" className="form-control" defaultValue={assignment.title}/>
                <br/>

                {/* Assignment Description Textarea */}
                <textarea
                    className="form-control"
                    id="wd-description"
                    style={{height: "400px"}}
                    defaultValue={"The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n" +
                        "The landing page should include the following:\n\n" +
                        "- Your full name and section\n" +
                        "- Links to each of the lab assignments\n" +
                        "- Links to all relevant source code repositories\n\n" +
                        "The Kambaz application should include a link to navigate back to the landing page."}

                />
            </div>
            <br/>

            {/* Form for Assignment Details */}
            <form className="d-flex flex-column">
                {/* Points Input */}
                <div className="d-flex align-content-center ms-auto">
                    <label htmlFor="wd-points" className="me-2">Points</label>
                    <input id="wd-points" className="form-control" style={{width: "450px"}} type="number"
                           defaultValue={parseInt(assignment.points)}/>
                </div>
                <br/>

                {/* Assignment Group Dropdown */}
                <div className="d-flex align-content-center ms-auto">
                    <label htmlFor="wd-group" className="me-2">Assignment Group</label>
                    <select id="wd-group" className="form-select" style={{width: "450px"}} defaultValue="ASSIGNMENTS">
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="PROJECT">Project</option>
                    </select>
                </div>
                <br/>

                {/* Display Grade As Dropdown */}
                <div className="d-flex align-content-center ms-auto">
                    <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
                    <select id="wd-display-grade-as" className="form-select" style={{width: "450px"}}
                            defaultValue="Percentage">
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select>
                </div>
                <br/>

                {/* Submission Type Section */}
                <div id="wd-submission" className="d-flex align-items-start ms-auto">
                    <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
                    <Card className="p-3" style={{width: "450px"}}>
                        <select id="wd-submission-type" className="form-select" style={{width: "420px"}}
                                defaultValue="Online">
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                            <option value="External Tools">External Tools</option>
                        </select>
                        <br/>
                        <Card.Title className="fw-bold">Online Entry Options</Card.Title>
                        <div>
                            <Form.Check type="checkbox" label="Text Entry"/>
                            <Form.Check type="checkbox" label="Website URL" defaultChecked/>
                            <Form.Check type="checkbox" label="Media Recordings"/>
                            <Form.Check type="checkbox" label="Student Annotation"/>
                            <Form.Check type="checkbox" label="File Uploads"/>
                        </div>
                    </Card>
                </div>
                <br/>

                {/* Assign Section */}
                <div id="wd-assign" className="d-flex align-items-start ms-auto">
                    <label htmlFor="wd-assign-to" className="me-2">Assign</label>
                    <Card className="p-3" style={{width: "450px"}}>
                        {/* Assign To Dropdown */}
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Assign To</Form.Label>
                            <Select options={options} isMulti/>
                        </Form.Group>

                        {/* Due Date Input */}
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Due</Form.Label>
                            <div className="input-group">
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    style={{appearance: "none", WebkitAppearance: "none", MozAppearance: "none"}}
                                    defaultValue={formattedDueDate}
                                />
                            </div>
                        </Form.Group>

                        {/* Available From and Until Inputs */}
                        <Form.Group className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <label htmlFor="wd-available-from" className="fw-bold">Available From</label>
                                    <input id="wd-available-from" type="datetime-local" className="form-control me-5"
                                           style={{width: "170px"}} defaultValue={formattedStartDate}/>
                                </div>
                                <div>
                                    <label htmlFor="wd-available-until" className="fw-bold">Until</label>
                                    <input id="wd-available-until" type="datetime-local" className="form-control me-5"
                                           style={{width: "170px"}} defaultValue={formattedDueDate}/>
                                </div>
                            </div>
                        </Form.Group>
                    </Card>
                </div>
            </form>

            {/* Save and Cancel Buttons */}
            <hr/>
            <div id="wd-modules-controls" className="text-nowrap">
                <Button
                    variant="danger"
                    size="lg"
                    className="me-1 float-end"
                    id="wd-save-assignment-change-btn"
                    style={{width: "150px"}}
                    onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)} // Change URL as needed
                >
                    Save
                </Button>

                <Button
                    variant="secondary"
                    size="lg"
                    className="me-1 float-end"
                    id="wd-cancel-assignment-change-btn"
                    style={{width: "150px"}}
                    onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)} // Change URL as needed
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}
