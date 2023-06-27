export default function Nav() {
  const userId = JSON.parse(localStorage.getItem("loggedUser"));
  return (
    <nav>
      <div className="flex justify-between p-10 shad ">
        <div>
          <p>
            Logged In User :{" "}
            <span className="bg-blue-600 text-white px-2 py-1 rounded-3xl font-bold">{userId?.username}</span>
          </p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </nav>
  );
}
