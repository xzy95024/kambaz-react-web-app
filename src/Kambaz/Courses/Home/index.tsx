import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-5">
                <Modules/>
            </div>
            <div className="d-none d-xl-block" style={{ width: "15vw", minWidth: "250px", maxWidth: "300px" }}>
                <CourseStatus/>
            </div>
        </div>

)
    ;
}
