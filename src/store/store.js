import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/searchTerm/searchTermSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import subredditsReducer from "../features/subreddits/subredditsSlice.js";
import commentsReducer from "../features/comments/commentsSlice.js";

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer,
        subreddits: subredditsReducer,
        comments: commentsReducer
    }
});