import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Features from "../../components/home/Features";
import Newsletter from "../../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Newsletter />
    </>
  );
};

export default Home;