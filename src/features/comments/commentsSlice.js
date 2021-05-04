import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadComments = createAsyncThunk(
    "comments/loadComments",
    async (post) => {
        console.log(post.id);
        const data = await fetch(`https://www.reddit.com/${post.permalink}.json`);
        const json = await data.json();
        console.log(json);
        return json;
    }
);

const initialState = {
    comments:{
        1: {username: "username 1", content:"this post is commented 1", commentId:"1", postId:"1"},
        2: {username: "username 2", content:"this post is commented 2", commentId:"2", postId:"1"},
        3: {username: "username 3", content:"this post is commented 3", commentId:"3", postId:"2"},
    },
    isLoadingComments: false,
    hasError: false
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadComments.pending, (state) => {
            state.isLoadingComments = true;
            state.hasError = false;
          })
          .addCase(loadComments.fulfilled, (state, action) => {
            state.isLoadingComments = false;
            state.hasError = false;
            state.comments = action.payload[1].data.children.slice(0,5).map((comment)=>({...comment, postId:action.payload[0].data.children[0].data.id}));
          })
          .addCase(loadComments.rejected, (state, action) => {
            state.isLoadingComments = false;
            state.hasError = true;
            state.comments = [];
          })
    }
});

export const selectComments = (state) => state.comments.comments;
export const isLoading = (state) => state.subreddits.isLoadingComments;

export default commentsSlice.reducer;