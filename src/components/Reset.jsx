import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      setError("All fields are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      localStorage.setItem("loginToken", data.token);
      navigate("/login");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="mt-20">
      {error && (
        <h2 className="text-center text-red-500 font-[500]">{error}</h2>
      )}
      <h2 className="text-center my-5 font-[500]">Reset Password</h2>
      <div className="flex justify-center items-center ">
        <form className="shad p-10 rounded-lg" onSubmit={handleReset}>
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 placeholder-black"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="px-5 py-2 rounded bg-slate-300 placeholder-black my-5"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="px-5 py-2 rounded bg-slate-300  placeholder-black"
            name="password"
            placeholder="Enter New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="button"
            value="Reset Password"
            className="px-5 py-2 rounded bg-indigo-700 hover:bg-indigo-800 text-white font-bold cursor-pointer my-5"
            onClick={handleReset}
          />
        </form>
      </div>
    </div>
  );
}