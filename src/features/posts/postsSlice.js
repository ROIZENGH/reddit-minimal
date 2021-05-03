import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    "posts/loadPosts",
    async (subreddit)=> {
        const data = await fetch(`https://www.reddit.com/${subreddit}.json`);
        const json = await data.json();
        return json.data.children;
    }
)

const initialState = {
    posts: {
        1: {username: "username 1", imageurl: "imageurl1", description:"post description 1", postId:"1"},
        2: {username: "username 2", imageurl: "imageurl2", description:"post description 2", postId:"2"},
        3: {username: "username 3", imageurl: "", description:"post description 3", postId:"3"}
    },
    isLoadingPosts: false,
    hasError: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        addPost: (state, action) =>{
            state.posts[action.payload.postid]=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadPosts.pending, (state) => {
            state.isLoadingPosts = true;
            state.hasError = false;
        })
        .addCase(loadPosts.fulfilled, (state, action) => {
            state.isLoadingPosts = false;
            state.hasError = false;
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            state.isLoadingPosts = false;
            state.hasError = true;
            state.posts = [];
        })
    }
})

export const selectPosts = (state) => state.posts.posts;

export const isLoading = (state) => state.posts.isLoading;

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
