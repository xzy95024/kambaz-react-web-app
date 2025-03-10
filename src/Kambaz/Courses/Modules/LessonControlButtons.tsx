import {IoEllipsisVertical} from "react-icons/io5";
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";



export default function LessonControlButtons({moduleId,lessonId,deleteModule, editModule,deleteLesson,editLesson}:
                                                 {
                                                     moduleId: string;
                                                     lessonId?: string;
                                                     deleteModule?: (moduleId: string) => void;
                                                     editModule?: (moduleId: string) => void;
                                                     deleteLesson?: (moduleId: string, lessonId: string) => void;
                                                     editLesson?: (moduleId: string, lessonId: string) => void;
                                                 }) {
    return (
        <div className="float-end">
            {/* If lessonId exists, handle lesson actions; otherwise, handle module actions */}
            {lessonId ? (
                <>
                    <FaPencil
                        onClick={() => {
                            if (editLesson) {
                                editLesson(moduleId, lessonId);
                            } else {
                                console.error("editLesson is not provided.");
                            }
                        }}
                        className="text-primary me-3"
                    />
                    <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => {
                            if (deleteLesson) {
                                deleteLesson(moduleId, lessonId);
                            } else {
                                console.error("deleteLesson is not provided.");
                            }
                        }}
                    />
                </>
            ) : (
                <>
                    <FaPencil
                        onClick={() => {
                            if (editModule) {
                                editModule(moduleId);
                            } else {
                                console.error("editModule is not provided.");
                            }
                        }}
                        className="text-primary me-3"
                    />
                    <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => {
                            if (deleteModule) {
                                deleteModule(moduleId);
                            } else {
                                console.error("deleteModule is not provided.");
                            }
                        }}
                    />
                </>
            )}
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}