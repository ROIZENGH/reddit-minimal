import React from "react";
import { useSelector } from "react-redux"
import {
    selectComments,
    isLoading
} from "./commentsSlice"

export const Comments = ({post}) =>{
    const comments = useSelector(selectComments);
    const isLoadingComments = useSelector(isLoading)

    if(isLoadingComments){
        <p>Loading Comments...</p>
    }

    return (
        <div>
            {Object.values(comments).map((comment)=> ( comment.postId === post.postId &&
                <div className="comment-container">
                    <p className="username">{comment.data.author}</p>
                    <p>{comment.data.body}</p>
                </div>
            ))}
        </div>
    )
}