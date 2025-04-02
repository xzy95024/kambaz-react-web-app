// import { createSlice } from "@reduxjs/toolkit";
//
//
// const initialState = {
//     courses: [], // Load courses from database
// };
//
// const courseSlice = createSlice({
//     name: "courses",
//     initialState,
//     reducers: {
//         setCourses: (state, { payload }) => {
//             state.courses = payload;
//         },
//         // Add a new course
//         addCourse: (state, { payload: newCourse }) => {
//             state.courses = [ ...state.courses, newCourse];
//         },
//
//         // Delete a course by ID
//         deleteCourse: (state, { payload: courseId }: { payload: string }) => {
//             state.courses = state.courses.filter((course: any) => course._id !== courseId);
//         },
//
//         // Update an existing course
//         updateCourse: (state, { payload: updatedCourse }: { payload: any }) => {
//             state.courses = state.courses.map((course: any) =>
//                 course._id === updatedCourse._id ? updatedCourse : course
//             );
//         },
//     },
// });
//
// export const { addCourse, deleteCourse, updateCourse,setCourses } = courseSlice.actions;
// export default courseSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Course {
    _id: string;
    name: string;
    number: string;
    description: string;
    startDate?: string;
    endDate?: string;
    image?: string;
}


interface CourseState {
    courses: Course[];
}


const initialState: CourseState = {
    courses: [],
};


const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload;
        },
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            const courseId = action.payload;
            state.courses = state.courses.filter((course) => course._id !== courseId);
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            const updatedCourse = action.payload;
            state.courses = state.courses.map((course) =>
                course._id === updatedCourse._id ? updatedCourse : course
            );
        },
    },
});


export const { setCourses, addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
