/* eslint-disable react/prop-types */
function Rating({ rating }) {
  const filledStars = Math.round(rating);

  return (
    <div className="custom-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${
            index < filledStars ? "text-slate-700" : "text-gray-300"
          } text-2xl`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
