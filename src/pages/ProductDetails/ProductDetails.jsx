import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

function ProductDetails() {
  const product = useLoaderData();
  const { image, name, type, price, description, rating } = product;
  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-md border border-gray-300">
      <div className="md:w-1/2 px-6">
        <img src={image} alt={name} className="w-full md:h-96 lg:h-4/5" />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <span className="text-sm text-gray-500">
          <Rating rating={product.rating} />
        </span>
        <p className="text-gray-600">{type}</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">{price} Tk.</p>
        <p className="text-gray-500 mt-4 lg:w-2/3">
          <span className="font-bold">Description:</span> <br /> {description}
        </p>

        <button className="lg:w-2/3 w-full mt-4 py-4 bg-black hover:bg-zinc-700 text-white font-semibold rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
