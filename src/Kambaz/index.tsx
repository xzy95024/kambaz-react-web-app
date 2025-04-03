import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client.ts";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import ProtectedCourseRoute from "./Courses/ProtectedCourseRoute.tsx";
import Session from "./Account/Session";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false); // ✅ 新增
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchMyCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAllCourses = async () => {
        try {
            const courses = await coursesClient.fetchAllCourses(); //
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    const deleteCourse = async (courseId: string) => {
        const status = await coursesClient.deleteCourse(courseId);
        if (status === "OK") {
            await fetchAllCourses();
        }

    }



useEffect(() => {
        const loadCourses = async () => {
            try {
                if (currentUser?.role === "STUDENT") {
                    await fetchMyCourses();
                } else {
                    await fetchAllCourses();
                }
            } catch (err) {
                console.error("Failed to load courses", err);
            }
        };

        loadCourses().catch((e) => console.error(e));
    }, [currentUser]);
    useEffect(() => {
        if (!currentUser) return;
        if (currentUser.role === "STUDENT") {
            if (showAllCourses) {
                fetchAllCourses();
            } else {
                fetchMyCourses();
            }
        } else {
            fetchMyCourses(); // faculty 永远只看自己 enroll 的课程
        }
    }, [currentUser, showAllCourses]);
    return (
        <div id="wd-kambaz">
            <KambazNavigation/>
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kambaz/Account"/>}/>
                    <Route path="/Account/*" element={<Account/>}/>
                    <Route path="Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard  courses={courses}
                                        showAllCourses={currentUser?.role === "STUDENT" ? showAllCourses : false}
                                       setShowAllCourses={setShowAllCourses}
                                       fetchMyCourses={fetchMyCourses}
                                       fetchAllCourses={fetchAllCourses}
                                        deleteCourse={deleteCourse} />
                        </ProtectedRoute>
                    }/>

                    <Route path="/Courses/:cid/*"
                           element={
                               <ProtectedCourseRoute>
                                   <Courses courses={courses}/>
                               </ProtectedCourseRoute>}/>
                    <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                    <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                </Routes>

            </div>
        </div>
    );
}
