function About() {
  return (
    <>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <img
            src="/about2.jpg"
            alt="About Craft Clothing"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 lg:pl-12 mt-4 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Craft Clothing
          </h1>
          <p className="text-gray-600">
            Discover the art of fashion at Craft Clothing. We merge creativity
            and craftsmanship to bring you unique and stylish clothing and
            accessories. Each piece is handcrafted with passion, making it a
            work of art. Explore our collection and express your individuality
            with our distinctive designs.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Attitude
          </h2>
          <p className="text-gray-600">
            At Craft Clothing, we believe in challenging the ordinary and
            embracing creativity. Our attitude is rooted in innovation and the
            relentless pursuit of unique designs. We're committed to delivering
            fashion that tells a story and reflects your personality.
          </p>
        </div>

        <div className="lg:w-2/3 lg:pl-12">
          <img
            src="/attitude.jpeg"
            alt="Our Attitude"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default About;
