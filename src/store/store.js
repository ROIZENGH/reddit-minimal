import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/searchTerm/searchTermSlice.js";
import postsReducer from "../features/posts/postsSlice.js";

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer,
    }
});