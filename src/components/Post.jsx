/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiSolidLike } from "react-icons/bi";
import Comment from "./Comment";

export default function Post({ post }) {
  const [like, setLike] = useState(false);
  const id = post._id;

  useEffect(() => {}, []);
  //   e.target.comment.value
  const handleComment = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("loggedUser")).id;
    if (!userId) return alert("Please login to comment");
    const comment = {
      text: e.target.comment.value,
      userId: userId,
    };

    const res = await fetch(`http://localhost:5000/api/posts/${id}/comment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await res.json();

    if (data.success) {
      toast.success("comment added successfully");
    }
    
  };

  return (
    <div className="my-5">
      <div>
        <div className="shad p-5 rounded-lg">
          <p className="text-sm">
            <span>Posted By : </span>
            <span className="font-[500]">{post?.user.username} </span>
          </p>
          <h1 className="text-xl font-bold my-2">{post.title}</h1>
          <p>{post.description}</p>
          <div className="my-2 flex items-center gap-x-5">
            <button onClick={() => setLike(!like)}>
              {like ? (
                <BiSolidLike size={25} className="text-blue-500" />
              ) : (
                <BiSolidLike size={25} />
              )}
            </button>
            <p>{post.likes.length} Peoples liked this</p>
          </div>
          <div className="my-3">
            <form onSubmit={handleComment}>
              <textarea
                type="text"
                className="px-5 py-2 bg-gray-300 my-2 rounded"
                name="comment"
              />
              <br />
              <input
                type="submit"
                className="cursor-pointer px-5 py-1 bg-blue-500 text-white"
                value={"Write a comment"}
              />
            </form>
          </div>

          <div>
            <h1>Comments</h1>
            <div className="flex flex-col">
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
