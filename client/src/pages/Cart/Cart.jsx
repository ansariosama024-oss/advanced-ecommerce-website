import { useEffect, useState } from "react";
import { getCart } from "../../services/cartService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-6 border rounded-xl p-5 mb-5 shadow"
        >
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-28 h-28 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {item.product.name}
            </h2>

            <p className="text-gray-500">
              {item.product.category}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              ₹{item.product.price}
            </p>

            <p className="mt-2">
              Quantity: {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;