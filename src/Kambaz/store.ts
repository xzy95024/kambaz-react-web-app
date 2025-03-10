import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import coursesReducer from "../Kambaz/Courses/reducer.ts";
import enrollmentsReducer from "./Enrollments/reducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        coursesReducer,
        enrollmentsReducer,
    },
});
export default store;