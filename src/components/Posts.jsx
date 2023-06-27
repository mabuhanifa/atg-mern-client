import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data.data);
    };
    fetchPosts();
  }, []);
  
  return (
    <div >
      <div>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
