const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

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
        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;