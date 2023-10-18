import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const products = useLoaderData();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-4">
      {products.length === 0 ? (
        <p className="col-span-2">No products found for this brand.</p>
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

            <div className="text-center">
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              <p className="text-sm text-gray-500">Type: {product.type}</p>
              <p className="text-sm text-gray-500">Rating: {product.rating}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                Details
              </button>
              <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 ml-4">
                Update
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductDetails;
