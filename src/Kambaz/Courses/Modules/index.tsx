export default function Modules() {
    return (
        <div>
            <button>Collapse All</button>
            <button>View Progress</button>
            <select defaultValue="VAL1">
                <option value="VAL1" >Publish All</option>
                <option value="VAL2">Value 2</option>
                <option value="VAL3">Value 3</option>
            </select>
            <button>+Module</button>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1,Lecture 1 - Course Introduction,Syllabus,Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer Chapter 1</li>
                                <li className="wd-content-item">Full Stack Developer Chapter 2</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Slides</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1,Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create User Interface with HTML</li>
                                <li className="wd-content-item">Deploy the assignment toNetlify</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Slides</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings and</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                </li>
            </ul>
        </div>
    );
}
