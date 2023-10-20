import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateProduct() {
  const [rating, setRating] = useState(0);
  const product = useLoaderData();
  const { _id, image, name, brand, type, price } = product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;

    const updatedProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating: rating,
    };

    fetch(
      `https://brand-shop-server-od9avun5v-naimulabeer.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product updated!", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      });
  };

  const handleRatingChange = (event) => {
    setRating(parseFloat(event.target.value));
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
        Update a Product
      </h1>

      <div className="mb-10 p-4 max-w-md mx-auto border rounded-lg shadow-lg border-gray-300 backdrop-blur-md">
        <form onSubmit={handleUpdateProduct}>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="input input-bordered"
              defaultValue={image}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered"
              defaultValue={name}
              required
            />
          </div>

          <div className="md:flex mb-8 gap-4">
            <div className="form-control w-1/2">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name
              </label>
              <select
                id="brand"
                name="brand"
                className="select select-bordered w-full max-w-xs"
                defaultValue={brand}
              >
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
                <option value="New Balance">New Balance</option>
                <option value="Reebok">Reebok</option>
                <option value="Versace">Versace</option>
              </select>
            </div>

            <div className="form-control w-1/2">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                className="select select-bordered w-full max-w-xs"
                defaultValue={type}
              >
                <option value="Footwear">Footwear</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Athletic Gear">Athletic Gear</option>
                <option value="Socks">Socks</option>
                <option value="Workout">Workout</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              className="input input-bordered"
              defaultValue={price}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <div className="rating">
              <input
                type="radio"
                name="rating"
                value="1"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="2"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="3"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="4"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="5"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-secondary">
              Update Product
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default UpdateProduct;
