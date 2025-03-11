import { createSlice } from "@reduxjs/toolkit";

// Load enrollments from localStorage if available; otherwise, use an empty array
const savedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");

const initialState = {
    enrollments: savedEnrollments, // ✅ Load persisted enrollments
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollStudent: (state, { payload }) => {
            if (!state.enrollments.some((enrollment:any) => enrollment.user === payload.user && enrollment.course === payload.course)) {
                state.enrollments.push(payload);
                localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // ✅ Save to localStorage
            }
        },
        unenrollStudent: (state, { payload }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment:any) => enrollment.user !== payload.user || enrollment.course !== payload.course
            );
            localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // ✅ Save to localStorage
        },
    },
});

export const { enrollStudent, unenrollStudent } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
