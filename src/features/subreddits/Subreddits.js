import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { 
    loadSubreddits,
    selectSubreddits,
    isLoading,
} from "./subredditsSlice";
import { loadPosts } from "../posts/postsSlice.js"

const Subreddits = () =>{
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const isLoadingSubreddits = useSelector(isLoading)
    const defaultIcon = "images/default-subreddit-logo.png"

    useEffect(() => {
        dispatch(loadSubreddits())
    }, [dispatch]);

    if (isLoadingSubreddits) {
        return (
            <div>
                <h2>Popular Subreddits</h2>
                <br />
                <p>Loading Subreddits</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Popular Subreddits</h2>
            {Object.values(subreddits).map((subreddit)=>(
                <button key={subreddit.data.id} className="subreddit-container" onClick={(e) => dispatch(loadPosts(subreddit.data.display_name_prefixed))}>
                    <img className="subreddit-icon" src={subreddit.data.icon_img || defaultIcon} alt=""/>
                    <p className="subreddit-name">{subreddit.data.display_name_prefixed}</p>
                </button>
            ))}
        </div>
    )
}

export default Subreddits; 