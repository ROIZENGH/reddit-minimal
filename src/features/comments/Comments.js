import React from "react";
import { useSelector } from "react-redux"
import { selectComments } from "./commentsSlice"

export const Comments = ({post}) =>{
    const comments = useSelector(selectComments);
    return (
        <div>
            {Object.values(comments).map((comment)=>(post.postId===comment.postId &&
            
                <React.Fragment>
                    <p>{comment.username}</p>
                    <p>{comment.content}</p>
                </React.Fragment>
            ))}
        </div>
    )
}