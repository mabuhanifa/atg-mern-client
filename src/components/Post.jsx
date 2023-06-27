import { useState } from "react";
/* eslint-disable react/prop-types */

import { BiSolidLike } from "react-icons/bi";

export default function Post({ post }) {
  const [like, setLike] = useState(false);
  console.log(post);
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
            <form>
              <textarea type="text" className="px-5 py-2 bg-gray-300 my-2 rounded"/>
              <br />
              <input type="submit" className="cursor-pointer px-5 py-1 bg-blue-500 text-white" value={"Write a comment"}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
