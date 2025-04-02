import  {useState,useEffect} from "react";
import ModulesControls from "./ModulesControls.tsx";
import {FormControl, ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./LessonControlButtons";
import {useParams} from "react-router-dom";
import {setModules,addModule, editModule, updateModule, deleteModule, editLesson, deleteLesson}
    from "./reducer";
import {useSelector, useDispatch} from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client.ts"
export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const {modules} = useSelector((state: any) => state.modulesReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer); // Get current user role
    const dispatch = useDispatch();
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div className="wd-title p-3 ps-2">
            {/* Only show module controls if the user is faculty */}
            {currentUser.role === "FACULTY" && (
                <div>
                <ModulesControls
                moduleName={moduleName}
             setModuleName={setModuleName}
                addModule={createModuleForCourse}
        />
        <br/><br/><br/><br/><br/>
                </div>
            )}



            <ListGroup className="rounded-0" id="wd-modules">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3"/> {!module.editing && module.name}
                                {module.editing && currentUser.role === "FACULTY" && (
                                    <FormControl className="w-50 d-inline-block"
                                                 onChange={(e) => dispatch(
                                                     updateModule({...module, name: e.target.value})
                                                 )}
                                                 onKeyDown={(e) => {
                                                     if (e.key === "Enter") {
                                                         saveModule({ ...module, editing: false });
                                                     }
                                                 }}
                                                 defaultValue={module.name}/>
                                )} {/* Only faculty can see module control buttons */}
                                {currentUser.role === "FACULTY" && (
                                    <ModuleControlButtons
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => removeModule(moduleId)}
                                        editModule={(moduleId) => dispatch(editModule(moduleId))}
                                    />
                                )}
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <ListGroup.Item className="wd-lesson p-3 ps-1" key={lesson._id}>
                                            <BsGripVertical className="me-2 fs-3" />

                                            {/* 🔥 Show FormControl if editing, otherwise show lesson name */}
                                            {!lesson.editing && lesson.name}
                                            {lesson.editing && currentUser.role === "FACULTY" && (
                                                <FormControl
                                                    className="w-50 d-inline-block"
                                                    onChange={(e) =>
                                                        dispatch(editLesson({ moduleId: module._id, lessonId: lesson._id, newName: e.target.value }))
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            dispatch(editLesson({ moduleId: module._id, lessonId: lesson._id, editing: false }));
                                                        }
                                                    }}
                                                    defaultValue={lesson.name}
                                                />
                                            )}

                                            {/* 🔥 Only faculty can see lesson control buttons */}
                                            {currentUser.role === "FACULTY" && (
                                                <ModuleControlButtons
                                                    moduleId={module._id}
                                                    lessonId={lesson._id} // Pass lessonId for lessons
                                                    deleteLesson={(moduleId, lessonId) => dispatch(deleteLesson({ moduleId, lessonId }))}
                                                    editLesson={(moduleId, lessonId) => dispatch(editLesson({ moduleId, lessonId, editing: true }))}
                                                />
                                            )}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>))}
            </ListGroup>


        </div>
    );
}
