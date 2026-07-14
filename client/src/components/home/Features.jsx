import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck size={40} />,
      title: "Free Shipping",
      description: "Free shipping on all orders over ₹999",
    },
    {
      icon: <FaLock size={40} />,
      title: "Secure Payment",
      description: "100% Secure payment with Stripe",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      description: "Our support team is always available",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose ShopEase?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;