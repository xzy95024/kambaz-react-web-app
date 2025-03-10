import Modules from "../Modules";
import CourseStatus from "./Status";
import {useSelector} from "react-redux";
export default function Home() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-5">
                <Modules/>
            </div>
            {/* Only show module controls if the user is faculty */}
            {currentUser.role === "FACULTY" && (
            <div className="d-none d-xl-block" style={{ width: "15vw", minWidth: "250px", maxWidth: "300px" }}>
                <CourseStatus/>
            </div>
            )}
        </div>

)
    ;
}
