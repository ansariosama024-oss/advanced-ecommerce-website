import { useEffect, useState } from "react";
import { getWishlist } from "../../services/wishlistService";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Wishlist ❤️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-full h-52 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">
              {item.product.name}
            </h2>

            <p className="text-gray-500">
              {item.product.category}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              ₹{item.product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;