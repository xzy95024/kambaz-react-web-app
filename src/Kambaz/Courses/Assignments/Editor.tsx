export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Editor</h2>

            {/* Assignment Name */}
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML"/><br/><br/>

            {/* Assignment Description */}
            <label htmlFor="wd-description">Description</label><br/>
            <textarea
                id="wd-description"
                rows={5}
                cols={60}
                defaultValue={"The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. " +
                    "The landing page should include the following:Your full name and section Links to each of the lab assignmentsLinks to all " +
                    "relevant source code repositoriesThe Kambaz application should include a link to navigate back to the landing page."}
            />
            <br/><br/>

            {/* Assignment Details */}
            <table>
                <tbody>
                {/* Points */}
                <tr>
                    <td align="right">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" defaultValue={100}/>
                    </td>
                </tr>

                {/* Assignment Group */}
                <tr>
                    <td align="right">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="QUIZZES">Quizzes</option>
                            <option value="EXAMS">Exams</option>
                            <option value="PROJECT">Project</option>
                        </select>
                    </td>
                </tr>

                {/* Display Grade As */}
                <tr>
                    <td align="right">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                            <option value="Letter Grade">Letter Grade</option>
                        </select>
                    </td>
                </tr>


                {/* Online Entry Options */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="Online">
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                            <option value="External Tool">External Tool</option>
                        </select>

                        <div>
                            <strong>Online Entry Options</strong>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wd-text-entry"/>
                                        <label htmlFor="wd-text-entry">Text Entry</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wd-website-url"/>
                                        <label htmlFor="wd-website-url">Website URL</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wd-media-recordings"/>
                                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wd-student-annotation"/>
                                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wd-file-upload"/>
                                        <label htmlFor="wd-file-upload">File Uploads</label>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>

                {/* Assign To */}
                <tr>
                    {/* Assign Label */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>

                    {/* Assign Inputs */}
                    <td>
                        <table>
                            <tbody>
                            {/* Labels */}
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available From</label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until</label>
                                </td>
                            </tr>
                            {/* Input Fields */}
                            <tr>
                                <td>
                                    <input id="wd-available-from" type="datetime-local"
                                           defaultValue="2024-05-06T12:00"/>
                                </td>
                                <td>
                                    <input id="wd-available-until" type="datetime-local"
                                           defaultValue="2024-05-20T12:00"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                </tbody>
            </table>


            {/* Save and Cancel Buttons */}
            <hr/>
            <div style={{display: "flex", justifyContent: "flex-end", gap: "10px"}}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}