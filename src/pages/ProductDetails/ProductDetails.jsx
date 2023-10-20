import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  const product = useLoaderData();
  const { image, name, type, price, description, rating } = product;

  const handleCart = () => {
    const cart = {
      name,
      image,
      type,
      price,
      description,
      rating,
    };

    fetch("https://brand-shop-server-od9avun5v-naimulabeer.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add to Cart Successfully!", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-md border border-gray-300">
      <ToastContainer />
      <div className="md:w-1/2 px-6">
        <img src={image} alt={name} className="w-full md:h-96 lg:h-4/5" />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <span className="text-sm text-gray-500">
          <Rating rating={rating} />
        </span>
        <p className="text-gray-600">{type}</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">{price} Tk.</p>
        <p className="text-gray-500 mt-4 lg:w-2/3">
          <span className="font-bold">Description:</span> <br /> {description}
        </p>

        <button
          onClick={handleCart}
          className="lg:w-2/3 w-full mt-4 py-4 bg-black hover:bg-zinc-700 text-white font-semibold rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
