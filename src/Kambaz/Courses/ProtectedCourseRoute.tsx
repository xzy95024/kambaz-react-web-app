import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedCourseRoute({ children }: { children: any }) {
    const { cid } = useParams(); // Get course ID from URL
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    // Ensure we have a valid user before checking enrollment
    if (!currentUser) {
        return <Navigate to="/Kambaz/Account" />;
    }

    //  Faculty members can access all courses
    if (currentUser.role === "FACULTY") {
        return children;
    }

    // Students must be enrolled to access a course
    const isEnrolled = enrollments.some(
        (enrollment: { user: string; course: string }) => enrollment.user === currentUser._id && enrollment.course === cid
    );


    return isEnrolled ? children : <Navigate to="/Kambaz/Dashboard" />;
}
