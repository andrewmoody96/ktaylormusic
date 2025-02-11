import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="h-100 flex flex-col justify-center items-center bg-black text-white">
      <h3 className="m-auto text-center">
        One of us lost our way. Click this to get back home.
      </h3>
      <button className="border-2 border-white bg-black text-white my-5 py-2 px-4 rounded-full">
        <Link to="/">Homepage</Link>
      </button>
    </main>
  );
  ƒ;
}
