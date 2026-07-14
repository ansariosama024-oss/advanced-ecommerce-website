import products from "../../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <button className="text-blue-600 font-semibold hover:underline">
          View All →
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;