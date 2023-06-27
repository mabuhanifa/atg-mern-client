import { toast } from "react-hot-toast";
import { useProvider } from "../contextAPI/context";

export default function CreatePost() {
  const userId = JSON.parse(localStorage.getItem("loggedUser"))?.id;

  const { forceUpdate } = useProvider();

  const createPost = async (e) => {
    e.preventDefault();

    if (!userId) return alert("Please login to create a post");

    if (e.target.title.value === "" || e.target.description.value === "") {
      toast.error("Please fill all the fields");
      return;
    }
    const post = {
      title: e.target.title.value,
      description: e.target.description.value,
      likes: [],
      comments: [],
      user: userId,
    };

    if (!userId) return alert("Please login to comment");

    const res = await fetch(
      `https://gold-determined-cricket.cyclic.app/api/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );
    const data = await res.json();
    if (data.success) {
      toast.success("Post added successfully");
      forceUpdate();
      e.target.title.value = "";
      e.target.description.value = "";
    }
  };
  return (
    <div className="my-5 shad rounded-xl">
      <div className="p-5">
        <h1 className="text-2xl font-bold text-center mb-5">Create New Post</h1>
        <form onSubmit={createPost}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="bg-gray-300 px-5 py-2 rounded w-full"
          />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className="my-5 bg-gray-300 px-5 py-2 rounded w-full"
          />
          <br />
          <input
            type="submit"
            value="Create Post"
            className="px-5 py-2 bg-blue-500 text-white rounded-md w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
