import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <p className="text-gray-500">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-yellow-500 text-xl mt-4">
            ⭐ {product.rating}
          </p>

          <div className="flex gap-4 items-center mt-4">
            <span className="text-4xl text-blue-600 font-bold">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400 text-xl">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="text-green-600 font-semibold mt-3">
            {Math.round(
              ((product.oldPrice - product.price) /
                product.oldPrice) *
                100
            )}
            % OFF
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

<div className="flex items-center gap-4 mt-6">
  <button
  onClick={() =>
    quantity > 1 && setQuantity(quantity - 1)
  }
  className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
>
  -
</button>

  <span className="text-xl font-semibold">
  {quantity}
</span>

  <button
  onClick={() =>
    setQuantity(quantity + 1)
  }
  className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
>
  +
</button>
</div>

<p className="mt-4 text-green-600 font-semibold">
  ✅ In Stock ({product.stock} items)
</p>

<div className="mt-6 p-4 rounded-lg bg-blue-50">
  <p>🚚 Free Delivery</p>
  <p>🔄 7 Days Return</p>
  <p>🔒 Secure Payment</p>
  </div>
<div className="mt-8 flex gap-4">
    
  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
    🛒 Add To Cart
  </button>

  <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
    ❤️ Wishlist
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;