export default function Signup() {
  return (
    <div>
      <div className="flex justify-center items-center mt-20">
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
            className="px-5 py-2 rounded bg-slate-300 placeholder-black"
            name="username"
            placeholder="Enter Username"
          />
          <br />
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 my-5 placeholder-black"
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <input
            type="button"
            value="Create Account"
            className="px-5 py-2 rounded bg-indigo-700 hover:bg-indigo-800 text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
}
