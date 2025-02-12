import {Link} from "react-router-dom";
import {useParams, useLocation} from "react-router";


export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const links = [
        { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
        { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
        { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
        { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
        { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
        { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
        { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
        { label: "People", path: `/Kambaz/Courses/${cid}/People` },
    ];

    return (
        <div id="wd-courses-navigation" className = "wd list-group fs-6 rounded-0">
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item text-danger border border-0
              ${pathname.includes(link.label) ? "active" : ""}`}>
                    {link.label}
                </Link>
            ))}

            {/*<Link key="course_home" to={`/Kambaz/Courses/${cid}/Home`} id="wd-course-home-link"*/}

            {/*      className={`list-group-item border border-0 ${pathname.includes("Home") ? "active" : ""}`}>*/}
            {/*    Home*/}
            {/*</Link>*/}
            {/*<Link key="course_modules" to={`/Kambaz/Courses/${cid}/Modules`} id="wd-course-modules-link"*/}
            {/*      className="list-group-item border border-0 ">*/}
            {/*    Modules*/}
            {/*</Link>*/}
            {/*<Link key="course_piazza" to={`/Kambaz/Courses/${cid}/Piazza`} id="wd-course-piazza-link"*/}
            {/*      className="list-group-item text-danger border border-0">*/}
            {/*    Piazza*/}
            {/*</Link>*/}
            {/*<Link key="course_zoom" to={`/Kambaz/Courses/${cid}/Zoom`} id="wd-course-zoom-link"*/}
            {/*      className="list-group-item text-danger border border-0">*/}
            {/*    Zoom*/}
            {/*</Link>*/}
            {/*<Link key="course_assignments" to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-course-quizzes-link"*/}
            {/*      className="list-group-item text-danger border border-0 active">*/}
            {/*    Assignments*/}
            {/*</Link>*/}
            {/*<Link key="course_quizzes" to={`/Kambaz/Courses/${cid}/Quizzes`} id="wd-course-assignments-link"*/}
            {/*      className="list-group-item text-danger border border-0">*/}
            {/*    Quizzes*/}
            {/*</Link>*/}
            {/*<Link key="course_grades" to={`/Kambaz/Courses/${cid}/Grades`} id="wd-course-grades-link"*/}
            {/*      className="list-group-item text-danger border border-0">*/}
            {/*    Grades*/}
            {/*</Link>*/}
            {/*<Link key="course_people" to={`/Kambaz/Courses/${cid}/People`} id="wd-course-people-link"*/}
            {/*      className="list-group-item text-danger border border-0">*/}
            {/*    People*/}
            {/*</Link>*/}
        </div>
    );
}
