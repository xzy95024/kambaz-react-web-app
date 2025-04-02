import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courses: [], // Load courses from database
};

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, { payload }) => {
            state.courses = payload;
        },
        // Add a new course
        addCourse: (state, { payload: newCourse }) => {
            state.courses = [ ...state.courses, newCourse];
        },

        // Delete a course by ID
        deleteCourse: (state, { payload: courseId }: { payload: string }) => {
            state.courses = state.courses.filter((course: any) => course._id !== courseId);
        },

        // Update an existing course
        updateCourse: (state, { payload: updatedCourse }: { payload: any }) => {
            state.courses = state.courses.map((course: any) =>
                course._id === updatedCourse._id ? updatedCourse : course
            );
        },
    },
});

export const { addCourse, deleteCourse, updateCourse,setCourses } = courseSlice.actions;
export default courseSlice.reducer;