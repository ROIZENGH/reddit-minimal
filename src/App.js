import './App.css';
import { SearchTerm } from './features/searchTerm/SearchTerm.js';
import { Posts } from "./features/posts/Posts.js";
import Subreddits from './features/subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="Nav-logo">
          <img src="images/reddit-logo-16.png" alt=""></img>
          <h1><span style={{color: "blue"}}>Reddit</span>Minimal</h1>
        </div>
        <SearchTerm />
      </nav>
      <main>
        <Posts className="posts-container"/>
        <Subreddits className="subjects-container"/>
      </main>
    </div>
  );
}

export default App;
