import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjects: {
        1: {subjectid: "1", subjectName: "Subject 1"}
    }
}

const subjectsSlice = createSlice({
    name: "subjects",
    initialState: initialState,
    reducers: {

    }
})

export const selectSubjects = (state) => state.subjects.subjects;

//export const {} = subjectsSlice.actions;
export default subjectsSlice.reducer;