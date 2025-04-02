import {createSlice} from "@reduxjs/toolkit";
import {modules} from "../../Database/index.js";

const initialState = {
    modules: [],
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },

        addModule: (state, {payload: module}) => {
            const newModule: any = {
                _id: crypto.randomUUID(),
                lessons: [],
                name: module.name,
                course: module.course,
            };
            state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.filter(
                (m: any) => m._id !== moduleId);
        },
        updateModule: (state, {payload: module}) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        editModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? {...m, editing: true} : m
            ) as any;
        },
        /** 🔥 NEW: Delete a lesson inside a module */
        deleteLesson: (state, { payload }) => {
            const { moduleId, lessonId } = payload;
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId
                    ? { ...m, lessons: m.lessons.filter((l: any) => l._id !== lessonId) }
                    : m
            ) as any;
        },
        /** 🔥 NEW: Edit a lesson inside a module */
        editLesson: (state, { payload }) => {
            const { moduleId, lessonId, newName, editing } = payload;

            state.modules = state.modules.map((m: any) =>
                m._id === moduleId
                    ? {
                        ...m,
                        lessons: m.lessons.map((l: any) =>
                            l._id === lessonId
                                ? { ...l, name: newName ?? l.name, editing: editing ?? l.editing }
                                : l
                        ),
                    }
                    : m
            ) as any;
        },

    },
});
export const {addModule, deleteModule, updateModule, editModule, deleteLesson, editLesson, setModules} =
    modulesSlice.actions;
export default modulesSlice.reducer;