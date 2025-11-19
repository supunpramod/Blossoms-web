import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full bg-pink-100 shadow-sm sticky top-0 px-4">
      <div className=" mx-auto px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl  font-semibold text-primary ">blossoms</h1>

        <div className="relative w-1/2">
  <input
    type="text"
    placeholder="Botanical flowers"
    className="
      w-full 
      pl-5 pr-12 
      py-2 
      rounded-full 
      bg-white
  
      text-black placeholder-[#9F9F9F]
      border border-white/40
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary
      transition-all
    "
  />

  {/* Search Icon */}
  <div
    className="
      absolute 
      right-2 top-1/2 -translate-y-1/2 
      bg-primary 
      p-2 
      rounded-full 
      cursor-pointer 
      hover:bg-pink-500 
      transition
    "
  >
    <FiSearch className="text-white text-lg" />
  </div>
</div>


        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-primary font-medium">
          <a href="#" className="hover:text-pink-900">Home</a>
          <a href="#" className="hover:text-pink-900">Products</a>
          <a href="#" className="hover:text-pink-900">Login</a>
          <a href="#" className="hover:text-pink-900">Sign In</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-primary">
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
