import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

function ProductDetails() {
  const products = useLoaderData();

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-4">
        {products.length === 0 ? (
          <span className="col-span-2">No products found for this brand.</span>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:border border-solid border-slate-700 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product._id}
                className=" w-48 h-48 mx-auto"
              />

              <p className="text-xl font-bold mt-4 text-center">
                Price: {product.price} Tk.
              </p>

              <div className="flex flex-col text-center">
                <span className="text-sm text-gray-500">
                  Brand: {product.brand}
                </span>
                <span className="text-sm text-gray-500">
                  Type: {product.type}
                </span>
                <span className="text-sm text-gray-500">
                  <Rating rating={product.rating} />
                </span>
              </div>

              <div className="flex justify-between mt-4 text-sm">
                <button className="bg-violet-300 text-white rounded px-2 py-1 hover:bg-violet-600">
                  Details
                </button>
                <button className="bg-slate-700 text-white rounded px-2 py-1 hover:bg-slate-400 ml-4">
                  Update
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductDetails;
