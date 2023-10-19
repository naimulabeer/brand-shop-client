import { Link, useLoaderData } from "react-router-dom";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import Membership from "../../components/Membership/Membership";

function Home() {
  const loadedCategories = useLoaderData();

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
      <div
        className=" text-3xl font-extrabold text-center py-4 mb-5"
        style={{
          backgroundImage: `url(/background1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        Products by Categories
      </div>
      <div className="flex flex-wrap justify-between">
        {loadedCategories.map((category) => (
          <ProductCategory key={category._id} category={category} />
        ))}
      </div>
      <Membership />
    </>
  );
}

export default Home;
