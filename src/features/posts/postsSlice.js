import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: {
        1: {username: "username 1", imageurl: "imageurl1", description:"post description 1", postid:"1"},
        2: {username: "username 2", imageurl: "imageurl2", description:"post description 2", postid:"2"},
        3: {username: "username 3", imageurl: "", description:"post description 3", postid:"3"}
    },
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        addPost: (state, action) =>{
            state.posts[action.payload.postid]=action.payload;
        }
    },
    extraReducers: {

    }
})

export const selectPosts = (state) => state.posts.posts;

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
