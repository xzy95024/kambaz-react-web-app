import { createSlice } from "@reduxjs/toolkit";

// Define the state type explicitly


// Define initialState with the correct type
const initialState = {
    message: "Hello World",
};

// Let createSlice infer the type automatically

const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {
        dummyReducer: (state) => state,
    },
});
export default helloSlice.reducer;
