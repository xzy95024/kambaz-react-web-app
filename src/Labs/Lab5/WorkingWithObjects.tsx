import { useState } from "react";
import {FormControl} from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module,setModule] = useState({
        id: "CS123",
        name: "React Module",
        description: "Intro to React components, props, and state",
        course: "Web Dev",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                         defaultValue={assignment.title} onChange={(e) =>
                setAssignment({...assignment, title: e.target.value})}/>
            <hr/>

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <hr/>
            <h3>Working With Module</h3>

            {/*  Retrieve full module */}
            <a
                className="btn btn-outline-primary me-2"
                href={`${REMOTE_SERVER}/lab5/module`}
                id="wd-retrieve-module"
            >
                Get Module
            </a>

            {/*  Retrieve module name */}
            <a
                className="btn btn-outline-secondary me-2"
                href={`${REMOTE_SERVER}/lab5/module/name`}
                id="wd-retrieve-module-name"
            >
                Get Module Name
            </a>

            {/*  Edit module name */}
            <h5 className="mt-3">Update Module Name</h5>
            <FormControl
                className="w-75 mb-2"
                type="text"
                value={module.name}
                id="wd-module-name"
                onChange={(e) => setModule({...module, name: e.target.value})}
            />
            <a
                id="wd-update-module-name"
                className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
            >
                Update Module Name
            </a>

            {/*  Edit module description */}
            <h5 className="mt-3">Update Module Description</h5>
            <FormControl
                className="w-75 mb-2"
                type="text"
                value={module.description}
                id="wd-module-description"
                onChange={(e) => setModule({...module, description: e.target.value})}
            />
            <a
                id="wd-update-module-description"
                className="btn btn-warning"
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
            >
                Update Module Description
            </a>

            <hr/>
            <h4>Modifying Assignment Score & Completion</h4>

            {/*  Assignment Score */}
            <FormControl
                className="w-50 mb-2"
                type="number"
                value={assignment.score}
                id="wd-assignment-score"
                onChange={(e) =>
                    setAssignment({...assignment, score: parseInt(e.target.value)})
                }
            />
            <a
                className="btn btn-outline-primary me-2"
                id="wd-update-assignment-score"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
            >
                Update Score
            </a>

            {/*  Completed */}
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-assignment-completed"
                    checked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({...assignment, completed: e.target.checked})
                    }
                />
                <label htmlFor="wd-assignment-completed" className="form-check-label">
                    Completed
                </label>
            </div>
            <a
                className="btn btn-outline-success"
                id="wd-update-assignment-completed"
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
            >
                Update Completed
            </a>

            <hr/>
        </div>
    );
}
