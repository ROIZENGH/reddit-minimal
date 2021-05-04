import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPosts } from "../posts/postsSlice.js";
import { setTerm, selectSearchTerm } from "./searchTermSlice.js"


export const SearchTerm = () => {
    const dispatch = useDispatch();
    const term = useSelector(selectSearchTerm);

    const onTermChangeHandler = (event)=>{
        dispatch(setTerm(event.target.value));
    }

    useEffect(() => {
        dispatch(filterPosts(term))
    }, [dispatch, term])

    return (
        <div className="searchbar-container">
            <input 
                type="text" 
                id="search"
                placeholder="Search in posts"
                value={term}
                onChange={onTermChangeHandler}
            />
            <img id="search-icon" alt="" src="images/search-icon.png" />
        </div>
    )
}
