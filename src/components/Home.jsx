import { Toaster } from "react-hot-toast";
import Nav from "./Nav";
import Posts from "./Posts";

export default function Home() {
  return (
    <div className="px-20 py-10">
      <Toaster />
      <Nav />
      <Posts />
    </div>
  );
}
