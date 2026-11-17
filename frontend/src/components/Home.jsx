import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";
import { POSTS_URL } from "../api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(POSTS_URL);
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
