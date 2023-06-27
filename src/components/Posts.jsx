import { useEffect, useState } from "react";

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
  console.log(posts);
  return <div>Posts</div>;
}
