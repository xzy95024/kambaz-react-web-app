import {Button, Card, Form} from "react-bootstrap";
import * as db from "../../Database";
import {useParams, useNavigate} from "react-router-dom";
import Select from "react-select";
import {parse, format, parseISO} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addAssignment, updateAssignment} from "./reducer.ts"; // Import date-fns for formatting

// Options for the "Assign To" dropdown
const options = [
    {value: "Everyone", label: "Everyone"},
    {value: "Option2", label: "Option2"},
    {value: "Option3", label: "Option3"}
];

export default function AssignmentEditor() {
    // Retrieve course ID (cid) and assignment ID (aid) from URL parameters
    const {cid, aid} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Find the assignment object based on the provided assignment ID
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    // Find assignment for editing, or create a new one
    const assignment = assignments.find((assignment: any) => assignment._id === aid);



    const [title, setTitle] = useState<string>(assignment?.title || "");
    const [description, setDescription] = useState<string>(assignment?.description || "");
    const [points, setPoints] = useState<number>(
        assignment?.points ? parseInt(assignment.points.replace(/\D/g, "")) : 0
    );
    const [dueDate, setDueDate] = useState<string>(
        assignment?.due_date
            ? format(parse(assignment.due_date, "MMM dd yyyy hh:mma", new Date()), "yyyy-MM-dd'T'HH:mm")
            : ""
    );

    const [availability, setAvailability] = useState<string>(
        assignment?.availability
            ? format(parse(assignment.availability, "MMM dd yyyy hh:mma", new Date()), "yyyy-MM-dd'T'HH:mm")
            : ""
    );


    const handleSave = () => {
        const formattedPoints = `${points} pts`; // Convert number back to "XX pts"
        const formattedDueDate = format(parseISO(dueDate), "MMM dd yyyy hh:mma");
        const formattedAvailability = format(parseISO(availability), "MMM dd yyyy hh:mma");
        let assignmentData = {
            _id: aid || crypto.randomUUID(), // Generate ID if new
            title,
            description,
            points: formattedPoints, // save  in "XX pts" format
            due_date: formattedDueDate,
            availability:formattedAvailability,
            course: cid!,
        };

        // if (aid) {
        //     dispatch(updateAssignment(assignmentData));
        // } else {
        //     console.log("🚀 Dispatching addAssignment with:", assignmentData);
        //     dispatch(addAssignment(assignmentData));
        // }
        if (aid && aid != "new") {
            dispatch(updateAssignment(assignmentData));
        } else {
            assignmentData = { ...assignmentData, _id: crypto.randomUUID() };
            console.log("🚀 Dispatching addAssignment with:", assignmentData);
            dispatch(addAssignment(assignmentData));
        }


        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <br/><br/>
            <div>
                {/* Assignment Name Input */}
                <label htmlFor="wd-name">Assignment Name</label><br/>
                <input id="wd-name" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>

                {/* Assignment Description Textarea */}
                <textarea className="form-control" id="wd-description" style={{height: "200px"}} value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <br/>
            {/* Form for Assignment Details */}
            <form className="d-flex flex-column">
                {/* Points Input */}
                <div className="d-flex align-content-center ms-auto">
                    <label htmlFor="wd-points" className="me-2">Points</label>
                    <input
                        id="wd-points"
                        className="form-control"
                        type="number"
                        defaultValue={0}
                        value={points} // Now always a number
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            setPoints(value ? parseInt(value) : 0); // Convert to number or default to 0
                        }}
                    />
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
                                    id="wd-due-date"
                                    style={{
                                        appearance: "none",
                                        WebkitAppearance: "none",
                                        MozAppearance: "none",
                                    }}
                                    value={dueDate}
                                    onChange={(e) =>{
                                        setDueDate(e.target.value);
                                    }}
                                />
                            </div>
                        </Form.Group>

                        {/* Available From and Until Inputs */}
                        <Form.Group className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <label htmlFor="wd-available-from" className="fw-bold">Available From</label>
                                    <input
                                        id="wd-available-from"
                                        type="datetime-local"
                                        className="form-control me-5"
                                        style={{
                                            width: "170px",
                                            appearance: "none",
                                            WebkitAppearance: "none",
                                            MozAppearance: "none",
                                        }}
                                        value={availability}
                                        onChange={(e) => {

                                            setAvailability(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="wd-available-until" className="fw-bold">Until</label>
                                    <input id="wd-available-until" type="datetime-local" className="form-control me-5"
                                           style={{width: "170px"}} />
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
                    onClick={() => {
                        console.log("Save Button Clicked"); //  Debugging step
                        handleSave();
                    }}
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
