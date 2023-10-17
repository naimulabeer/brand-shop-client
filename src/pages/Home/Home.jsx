import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="mt-5 mb-10 relative flex justify-center">
        <img className=" lg:w-[800px]" src="/banner.jpg" alt="Clothbanner" />
        <Link
          to="/"
          className="absolute bottom-4 text-white rounded-lg border-1 px-3 py-2 bg-slate-800"
        >
          Search for our products
        </Link>
      </div>
    </>
  );
}

export default Home;
