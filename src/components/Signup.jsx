import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="mt-20">
      <h2 className="text-center my-5 font-[500]">
        Already have an account ?
        <span className="bg-indigo-600 text-white ml-2 px-2 py-1 border rounded">
          <Link to="/login"> Sign In</Link>
        </span>
      </h2>
      <div className="flex justify-center items-center ">
        <form className="shad p-10 rounded-lg">
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 placeholder-black"
            name="email"
            placeholder="Enter Email"
          />
          <br />
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 placeholder-black my-5"
            name="username"
            placeholder="Enter Username"
          />
          <br />
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300  placeholder-black"
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <input
            type="button"
            value="Create Account"
            className="my-5 px-5 py-2 rounded bg-indigo-700 hover:bg-indigo-800 text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
}
