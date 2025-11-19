import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full bg-pink-100 shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-semibold text-pink-700">blossoms</h1>

        {/* Search Bar */}
        <div className="flex items-center w-1/2">
          <input
            type="text"
            placeholder="Botanical flowers"
            className="w-full pl-4 pr-10 py-2 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <FiSearch className="-ml-8 text-pink-700 cursor-pointer" />
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-pink-700 font-medium">
          <a href="#" className="hover:text-pink-900">Home</a>
          <a href="#" className="hover:text-pink-900">Products</a>
          <a href="#" className="hover:text-pink-900">Login</a>
          <a href="#" className="hover:text-pink-900">Sign In</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-pink-700">
          <div className="relative">
            <FiUser className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full"></span>
          </div>
          <FiShoppingCart className="text-2xl cursor-pointer" />
        </div>

      </div>
    </div>
  );
}
