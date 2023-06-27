import { useProvider } from "../contextAPI/context";
import Post from "./Post";

export default function Posts() {
  const {
    state: { posts },
  } = useProvider();

  return (
    <div>
      <div>
        {posts && posts.map((post) => <Post post={post} key={post._id} />)}
      </div>
    </div>
  );
}
