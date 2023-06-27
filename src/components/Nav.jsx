import { toast } from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useProvider } from "../contextAPI/context";

export default function Nav() {
  const userId = JSON.parse(localStorage.getItem("loggedUser"));
  const { forceUpdate } = useProvider();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success("Log out Successfully");
    forceUpdate();
  };

  return (
    <nav>
      <div className="md:flex md:justify-between p-10 shad ">
        <div>
          <p>
            Logged In User :{" "}
            <span
              className={` text-white px-2 py-1 rounded-3xl font-bold ${
                userId?.username ? "bg-blue-600" : "bg-red-600"
              }`}
            >
              {userId ? userId?.username : "No User Logged In"}
            </span>
          </p>
        </div>
        <div>
          {userId?.username ? (
            <button
              className="flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded-3xl"
              onClick={handleLogout}
            >
              Log Out
              <span>
                <FiLogOut />
              </span>
            </button>
          ) : (
            <button className="px-5 py-2 bg-indigo-700 text-white font-bold rounded-lg">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
