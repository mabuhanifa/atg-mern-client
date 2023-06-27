import { Toaster } from "react-hot-toast";
import Posts from "./Posts";

export default function Home() {
   
  return (
    <div className="px-20 py-10">
      <Toaster />
      <Posts/>
    </div>
  )
}
