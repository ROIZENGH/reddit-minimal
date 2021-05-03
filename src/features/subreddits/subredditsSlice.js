import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk(
    "subreddits/loadSubreddits",
    async ()=> {
        const data = await fetch("https://www.reddit.com/subreddits.json");
        const json = await data.json();
        return json.data.children;
    }
)

const initialState = {
    subreddits: [ ],
    isLoadingSubreddits: false,
    hasError: false,
}

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(loadSubreddits.pending, (state) => {
          state.isLoadingSubreddits = true;
          state.hasError = false;
        })
        .addCase(loadSubreddits.fulfilled, (state, action) => {
          state.isLoadingSubreddits = false;
          state.hasError = false;
          state.subreddits = action.payload;
        })
        .addCase(loadSubreddits.rejected, (state, action) => {
          state.isLoadingSubreddits = false;
          state.hasError = true;
          state.subreddits = [];
        })
    }
})

export const selectSubreddits = (state) => state.subreddits.subreddits;

export const isLoading = (state) => state.subreddits.isLoadingSubreddits;

//export const {} = subreddtisSlice.actions;
export default subredditsSlice.reducer;
