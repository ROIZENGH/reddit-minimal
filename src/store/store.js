import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/searchTerm/searchTermSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import subjectsReducer from "../features/subjects/subjectsSlice.js";
import commentsReducer from "../features/comments/commentsSlice.js";

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer,
        subjects: subjectsReducer,
        comments: commentsReducer
    }
});