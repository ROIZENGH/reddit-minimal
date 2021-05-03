import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments:{
        1: {username: "username 1", content:"this post is commented 1", commentId:"1", postId:"1"},
        2: {username: "username 2", content:"this post is commented 2", commentId:"2", postId:"1"},
        3: {username: "username 3", content:"this post is commented 3", commentId:"3", postId:"2"},
    }
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state,action) =>{
            state.comments[action.payload.commentId]=action.payload;
        }
    }
});

export const selectComments = (state) => state.comments.comments;

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;