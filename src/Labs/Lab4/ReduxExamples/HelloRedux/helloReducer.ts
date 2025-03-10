import { createSlice } from "@reduxjs/toolkit";

// ✅ Define the state type explicitly
interface HelloState {
    message: string;
}

// ✅ Define initialState with the correct type
const initialState: HelloState = {
    message: "Hello World",
};

// ✅ Explicitly define the generic type for createSlice
const helloSlice = createSlice<HelloState, {}, "hello">({
    name: "hello",
    initialState,
    reducers: {}, // Empty reducers
});

export default helloSlice.reducer;

