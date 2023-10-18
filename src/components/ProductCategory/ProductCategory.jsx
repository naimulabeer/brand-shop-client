function ProductCategory({ category }) {
  const { brandName, brandImage } = category;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl w-1/2">
        <figure className="w-full h-full">
          <img src={brandImage} alt="brandimage" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <h1>{brandName}</h1>
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
