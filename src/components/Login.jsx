import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("All fields are required");
      return;
    }
    
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("loginToken", data.token);
      navigate("/");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="mt-20">
      {error && (
        <h2 className="text-center text-red-500 font-[500]">{error}</h2>
      )}
      <h2 className="text-center my-5 font-[500]">
        Do not have an account ?
        <span className="bg-indigo-600 text-white ml-2 px-2 py-1 border rounded ">
          <Link to="/signup"> Register</Link>
        </span>
      </h2>
      <div className="flex justify-center items-center ">
        <form className="shad p-10 rounded-lg" onSubmit={handleLogin}>
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 placeholder-black"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="px-5 py-2 rounded bg-slate-300 my-5 placeholder-black"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="button"
            value="Login"
            className="px-5 py-2 rounded bg-indigo-700 hover:bg-indigo-800 text-white font-bold cursor-pointer "
            onClick={handleLogin}
          />
        </form>
      </div>
    </div>
  );
}
