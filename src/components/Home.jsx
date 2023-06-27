import { Toaster } from "react-hot-toast";
import CreatePost from "./CreatePost";
import Nav from "./Nav";
import Posts from "./Posts";

export default function Home() {
  return (
    <div className="p-5 md:px-20 py-10">
      <Toaster />
      <Nav />
      <CreatePost/>
      <Posts />
    </div>
  );
}
