const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    id: 3,
    name: "Laptops",
    image: "https://cdn-icons-png.flaticon.com/512/179/179386.png",
  },
  {
    id: 4,
    name: "Watches",
    image: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer p-6 text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 mx-auto"
            />

            <h3 className="mt-4 text-xl font-semibold">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;