import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjects: {
        1: {subjectid: "1", subjectName: "Subject 1", subjectImageUrl: "imageurl1"},
        2: {subjectid: "2", subjectName: "Subject 2", subjectImageUrl: "imageurl2"},
        3: {subjectid: "3", subjectName: "Subject 3", subjectImageUrl: "imageurl3"}
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