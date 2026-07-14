const Newsletter = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Subscribe to our Newsletter
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Get updates about new products, discounts and offers.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg text-black w-full md:w-96 outline-none"
          />

          <button className="bg-black px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;