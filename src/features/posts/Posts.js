import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comments } from "../comments/Comments.js";
import { loadComments } from "../comments/commentsSlice.js";
import { 
    loadPosts, 
    selectPosts, 
    isLoading,
    selectFilteredPosts
} from "./postsSlice.js";

export const Posts = () => {
    const dispatch = useDispatch();
    const isLoadingPosts = useSelector(isLoading);
    const posts = useSelector(selectFilteredPosts);
    
    useEffect(() => {
        dispatch(loadPosts("r/pics"))
    }, [dispatch])

    if(isLoadingPosts) {
        return (
            <React.Fragment>
                <h2>Top Posts</h2>
                <br />
                <p>Loading Posts...</p>
            </React.Fragment>

        );
    }

    return (
        <div>
            <h2>Top Posts</h2>
            {Object.values(posts).map((post)=>(
                <div key={post.data.id} className="post-container">
                    <h3>{post.data.title}</h3>
                    <div className="image-container">
                        {post.data.url_overridden_by_dest && <img className="post-image" src={post.data.url_overridden_by_dest} alt=""/>}
                    </div>
                    <a href={`https://www.reddit.com/user/${post.data.author}`}>u/{post.data.author}</a>
                    <button><img className="comments-icon" src="images/comments-512.png" alt="display comments" onClick={(e)=> dispatch(loadComments(post.data))}/>{post.data.num_comments}</button>
                    <Comments post={post}/>
                </div>
            ))}
        </div>
    )
}