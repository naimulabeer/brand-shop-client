/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductPage() {
  const products = useLoaderData();

  return (
    <>
      <div className="hidden md:block m-auto md:w-1/2 md:h-1/2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide>
            <img src="/slider1.jpg" alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slider2.jpg" alt="slider2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slider3.jpg" alt="slider3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="mt-10 mb-10 text-center text-3xl font-bold border border-b-1 border-b-slate-500 bg-slate-400">
        All Products Here
      </h1>
      <div className="mb-10 grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-4">
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

              <p className="text-lg font-bold mt-4 text-center">
                {product.name}
              </p>

              <p className="font-bold mt-4 text-center">
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
                <Link
                  to={`/productPage/${product.brand}/${product._id}/details`}
                  className="bg-violet-300 text-white rounded px-2 py-1 hover:bg-violet-600"
                >
                  Details
                </Link>
                <Link
                  to={`/productPage/${product.brand}/${product._id}`}
                  className="bg-slate-700 text-white rounded px-2 py-1 hover:bg-slate-400 ml-4"
                >
                  Update
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductPage;
