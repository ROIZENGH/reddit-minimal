import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: "",
}

const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: initialState,
    reducers: {
        setTerm: (state, action) =>{
            state.term=action.payload;
        }

    },
    extraReducers: {

    }
})

export const selectSearchTerm = (state) => state.searchTerm.term;

export const { setTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;