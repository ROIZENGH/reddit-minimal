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
    posts: [
        
    ],
    filteredPosts: [],
    isLoadingPosts: false,
    hasError: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        filterPosts: (state, action) =>{
            if(action.payload.length === 0){
                state.filteredPosts = state.posts;    
            }
            state.filteredPosts = state.posts.filter((post)=> post.data.title.toLowerCase().includes(action.payload.toLowerCase()));
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
            state.posts = action.payload.map((post)=>({...post, postId:post.data.id}));
            state.filteredPosts = state.posts;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            state.isLoadingPosts = false;
            state.hasError = true;
            state.posts = [];
        })
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectFilteredPosts = (state) => state.posts.filteredPosts;

export const isLoading = (state) => state.posts.isLoading;

export const { filterPosts } = postsSlice.actions;
export default postsSlice.reducer;
