import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice.js";

export const Posts = () => {
    const posts = useSelector(selectPosts);
    return (
        <div>
            <h2>POSTS</h2>
            {Object.values(posts).map((post)=>(
                <div className="post-container">
                    <h3>{post.username}</h3>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    )
}