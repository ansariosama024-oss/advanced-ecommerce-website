const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            Shop the Latest Collection
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Discover premium fashion, electronics and accessories
            with exciting offers.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Explore
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Hero"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;