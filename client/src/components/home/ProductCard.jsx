import { addToCart } from "../../services/cartService";
import { addToWishlist } from "../../services/wishlistService";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
  try {
    await addToCart(product._id);

    alert("Product added to cart ✅");
  } catch (error) {
    console.error(error);
    alert("Failed to add product");
  }
};
const handleWishlist = async () => {
  try {
    await addToWishlist(product._id);
    alert("Added to Wishlist ❤️");
  } catch (error) {
    alert("Failed to add wishlist");
  }
};
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Link to={`/product/${product._id}`}>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-56 object-cover hover:scale-105 transition duration-300"
  />
</Link>

      <div className="p-5">
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mt-1">
          {product.name}
        </h3>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating}
        </p>

        <div className="mt-3 flex gap-3 items-center">
          <span className="text-blue-600 font-bold text-xl">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
        </div>
        
        <p className="text-green-600 font-semibold mt-2">
  {Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  )}
  % OFF
</p>
<Link to={`/product/${product._id}`}>
  <button className="mt-5 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
    View Details
  </button>
</Link>
<button
  onClick={handleWishlist}
  className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
>
  ❤️ Add to Wishlist
</button>
        <button
        onClick={handleAddToCart}
         className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
     
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;