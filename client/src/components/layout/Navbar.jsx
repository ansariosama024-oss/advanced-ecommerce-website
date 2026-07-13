import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Search */}
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <Link to="/wishlist">
            <FaHeart className="text-2xl hover:text-red-500 duration-300" />
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-blue-600 duration-300" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              0
            </span>
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;