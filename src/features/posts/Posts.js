import { useSelector } from "react-redux";
import selectPosts from "./postsSlice.js";

export const Posts = () => {
    //const posts = useSelector(selectPosts);
    return (
        <div>
            <h2>POSTS</h2>
            <p>First Post</p>
            <p>Second Post</p>
        </div>
    )
}