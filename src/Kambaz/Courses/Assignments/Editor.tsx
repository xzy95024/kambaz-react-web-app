import {Button, Card, Form} from "react-bootstrap";

import Select from "react-select";
import {FaCalendarAlt} from "react-icons/fa";
import {FaPlus} from "react-icons/fa6";

const options = [
    { value: "Everyone", label: "Everyone" },
    { value: "Option2", label: "Option2" },
    { value: "Option3", label: "Option3" }
];

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <br/><br/>
            <div>
            {/* Assignment Name */}
            <label htmlFor="wd-name">Assignment Name</label><br/>
            <input id="wd-name" className="form-control"  defaultValue="A1"/>
            <br/>

            {/* Assignment Description */}
            <textarea
                className="form-control"
                id="wd-description"
                style={{ height: "400px"}}
                defaultValue={"The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. " +
                    "The landing page should include the following:Your full name and section Links to each of the lab assignmentsLinks to all " +
                    "relevant source code repositoriesThe Kambaz application should include a link to navigate back to the landing page."}
            />
            </div>
            <br/>

            <form className="d-flex flex-column">
                <div className="d-flex align-content-center   ms-auto">
                    <label htmlFor="wd-points" className="me-2">Points</label>
                    <input id="wd-points" className="form-control" style={{width: "450px"}} type="number"
                           defaultValue={100}/>
                </div>
                <br/>
                <div className="d-flex align-content-center  ms-auto">
                    <label htmlFor="wd-group" className="me-2">Assignment Group</label>
                    <select id="wd-group" className="form-select" style={{width: "450px"}} defaultValue="ASSIGNMENTS">
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="PROJECT">Project</option>
                    </select>

                </div>
                <br/>
                <div className="d-flex align-content-center  ms-auto">
                    <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
                    <select id="wd-display-grade-as" className="form-select" style={{width: "450px"}}
                            defaultValue="Percentage">
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select>
                </div>
                <br/>
                <div id="wd-submission" className="d-flex align-items-start  ms-auto">
                    <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
                    <Card className="p-3" style={{width: "450px"}}>
                        <select id="wd-submission-type" className="form-select" style={{width: "420px"}}
                                defaultValue="Online"
                        >
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
                <div id="wd-assign" className="d-flex align-items-start  ms-auto">
                    <label htmlFor="wd-assign-to" className="me-2">Assign</label>
                    <Card className="p-3" style={{width: "450px"}}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Assign To</Form.Label>
                            <Select options={options} isMulti />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Due</Form.Label>
                            <div className="input-group">
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
                                    defaultValue="2024-05-13T23:59"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <label htmlFor="wd-available-from" className = "fw-bold">Available From</label>
                                    <input
                                        id = "wd-available-from"
                                        type="datetime-local"
                                        className="form-control me-5"
                                        style={{width: "170px"}}
                                        defaultValue="2024-05-13T23:59"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="wd-available-until" className="fw-bold">Until</label>
                                    <input
                                        id="wd-available-until"
                                        type="datetime-local"
                                        className="form-control me-5"
                                        style={{width: "170px"}}
                                        defaultValue="2024-05-13T23:59"
                                    />
                                </div>
                            </div>
                        </Form.Group>
                    </Card>


                </div>
            </form>


            {/* Save and Cancel Buttons */}
            <hr/>
            <div id="wd-modules-controls" className="text-nowrap">
                <Button variant="danger" size="lg" className="me-1 float-end"
                        id="wd-save-assignment-change-btn" style = {{width:"150px"}}>
                    Save
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end"
                        id="wd-cancel-assignment-change-btn" style = {{width:"150px"}}>
                    Cancel
                </Button>
            </div>
        </div>
    );
}