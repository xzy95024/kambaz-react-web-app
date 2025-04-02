// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// // @ts-expect-error
// import * as db from "../../Database/index.js";
// export default function PeopleTable() {
//     const { cid } = useParams();
//
//     const { users, enrollments } = db;
//
//
//     const enrolledUser = users.filter((user: any) =>
//         enrollments.some((enrollment: any) =>
//             enrollment.user === user._id && enrollment.course === cid
//         )
//     );
//     return (
//         <div id="wd-people-table">
//             <Table striped>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Login ID</th>
//                     <th>Section</th>
//                     <th>Role</th>
//                     <th>Last Activity</th>
//                     <th>Total Activity</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {enrolledUser.length > 0 ? (
//                     enrolledUser.map((user: any) => (
//                         <tr key={user._id}>
//                             <td className="wd-full-name text-nowrap">
//                                 <FaUserCircle className="me-2 fs-1 text-secondary" />
//                                 <span className="wd-first-name">{user.firstName}</span>
//                                 <span className="wd-last-name">{user.lastName}</span>
//                             </td>
//                             <td className="wd-login-id">{user.loginId}</td>
//                             <td className="wd-section">{user.section}</td>
//                             <td className="wd-role">{user.role}</td>
//                             <td className="wd-last-activity">{user.lastActivity}</td>
//                             <td className="wd-total-activity">{user.totalActivity}</td>
//                         </tr>
//                     ))
//                 ) : (
//                     <tr>
//                         <td colSpan={6} >No students enrolled in this course.</td>
//                     </tr>
//                 )}
//                 </tbody>
//
//             </Table>
//         </div>);
// }
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as client from "./client"; // 👈 新建的 client.ts

export default function PeopleTable() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);

    const loadPeople = async () => {
        if (!cid) return;
        const people = await client.fetchEnrolledUsers(cid);
        setUsers(people);
    };

    useEffect(() => {
        loadPeople();
    }, [cid]);

    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{user.firstName}</span>
                                <span className="wd-last-name">{user.lastName}</span>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6}>No students enrolled in this course.</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}
