import { Link } from "react-router-dom";

function Blog() {
  return (
    <div
      className="bg-black h-5/6 relative mb-10"
      style={{
        backgroundImage: `url(/overlay2.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-3 gap-10 p-5">
        <div className="p-5 cursor-pointer">
          <img
            src="/blog1.jpg"
            alt="blog1"
            className="rounded-lg shadow-lg lg:h-96 md:w-64 md:h-72 h-full  mb-4"
          />
        </div>

        <div className="p-5 cursor-pointer">
          <img
            src="/blog2.jpg"
            alt="blog2"
            className="rounded-lg shadow-lg text-center lg:h-96 md:w-64 md:h-72 h-full mb-4"
          />
        </div>

        <div className="p-5 cursor-pointer">
          <img
            src="/blog3.jpg"
            alt="blog3"
            className="rounded-lg shadow-lg text-center lg:h-96 md:w-64 md:h-72 h-full mb-4"
          />
        </div>
      </div>

      <div className="text-center relative bottom-4 lg:right-10">
        <Link
          to="/about"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
        >
          Learn about us
        </Link>
      </div>
    </div>
  );
}

export default Blog;
