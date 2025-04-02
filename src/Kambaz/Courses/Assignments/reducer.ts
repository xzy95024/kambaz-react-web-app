import { createSlice } from "@reduxjs/toolkit";
import {assignments} from "../../Database/index.js"; // Import assignments from the database

const initialState = {
    assignments: assignments, // Initialize assignments from database
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: newAssignment }) => {
            console.log(" Adding to Redux State:", newAssignment); // ✅ Debug log

            state.assignments = [
                ...state.assignments,
                {
                    ...newAssignment,
                    availability: newAssignment.availability || "N/A", // Prevent undefined
                    due_date: newAssignment.due_date || "N/A",
                    points: `${newAssignment.points}`,
                }
            ];
        },
        updateAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((assignment: any) =>
                assignment._id === updatedAssignment._id
                    ? { ...updatedAssignment, points: `${updatedAssignment.points} pts` }
                    : assignment
            );
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((assignment:any) => assignment._id !== assignmentId);
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;