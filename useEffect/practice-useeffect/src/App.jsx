import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{`${post.id} - ${post.title}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
