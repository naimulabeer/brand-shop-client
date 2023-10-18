import { useState } from "react";

const AddProduct = () => {
  const [rating, setRating] = useState(0);

  const onSubmitForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating: rating,
    };

    console.log(newProduct);
  };

  const handleRatingChange = (event) => {
    setRating(parseFloat(event.target.value));
  };

  return (
    <div className="mb-10 p-4 max-w-md mx-auto border rounded-lg shadow-lg border-gray-300 backdrop-blur-md">
      <form onSubmit={onSubmitForm}>
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
            >
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Adidas">Puma</option>
              <option value="Adidas">New Balance</option>
              <option value="Adidas">Reebok</option>
              <option value="Adidas">Versace</option>
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
            >
              <option value="Footwear">Footwear</option>
              <option value="Clothing">Clothing</option>
              <option value="Clothing">Accessories</option>
              <option value="Clothing">Athletic Gear</option>
              <option value="Clothing">Socks</option>
              <option value="Clothing">Workout</option>
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
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="6"
            className="textarea textarea-bordered md:w-full"
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
          <button type="submit" className="btn btn-success btn-outline">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
