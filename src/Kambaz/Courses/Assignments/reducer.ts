import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: string;
    availability?: string;
    due_date?: string;
    course: string;
}


interface AssignmentsState {
    assignments: Assignment[];
}


const initialState: AssignmentsState = {
    assignments: [],
};

// 4️⃣ createSlice 使用类型
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            const newAssignment = action.payload;
            state.assignments = [
                ...state.assignments,
                {
                    ...newAssignment,
                    availability: newAssignment.availability || "N/A",
                    due_date: newAssignment.due_date || "N/A",
                    points: `${newAssignment.points}`,
                },
            ];
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const updated = action.payload;
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === updated._id
                    ? { ...updated, points: `${updated.points} pts` }
                    : assignment
            );
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== id
            );
        },
    },
});

// 5️⃣ Export actions and reducer
export const {
    setAssignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
