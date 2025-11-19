import { FiHeart } from "react-icons/fi";
import Girlimage from "../assets/Homepage/Girlimage.png";

export default function Homepage() {
  const products = [
    { img: "/flowers1.jpg", title: "Pink Shaded White Rose Bouquet", price: 3200 },
    { img: "/flowers1.jpg", title: "Pink Shaded White Rose Bouquet", price: 3200 },
    { img: "/flowers1.jpg", title: "Pink Shaded White Rose Bouquet", price: 3200 },
    { img: "/flowers1.jpg", title: "Pink Shaded White Rose Bouquet", price: 3200 },
  ];

  return (
    <div className="w-full">

      {/* ----------------------------------------------------
          HERO SECTION
      ----------------------------------------------------- */}
      <div className="w-full bg-secondary py-12 px-4  ">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 mx-auto px-10 ">
          
          {/* Left Side */}
          <div>
            <h1 className="text-5xl font-bold text-primary leading-snug">
              Where Love Blooms<br />
              Into Unforgettable<br />
              Memories.
            </h1>

            <p className="mt-4 text-2xl text-primary">
              Explore Our Curated Collection of<br/>
               Fresh Blossoms and Gifts with<br/>
              Your Lovely Moments
            </p>

            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-pink-900 transition">
              EXPLORE NOW
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl bg-secondary p-4">
              <img
                src={Girlimage}
                alt="Girl"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>


      {/* ----------------------------------------------------
          TODAY OFFERS SECTION
      ----------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Today Offers</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Romantic Offers Box */}
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">Romantic Offers</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                  <h2 className="mt-3 font-semibold text-gray-800">{p.title}</h2>
                  <p className="text-pink-700 font-bold mt-1">Rs.{p.price}.00</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>🚚 1-2 Days</span>
                    <span className="flex items-center gap-1">
                      <FiHeart className="text-pink-600" /> 12K
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Super Offers Box */}
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Super Offers</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                  <h2 className="mt-3 font-semibold text-gray-800">{p.title}</h2>
                  <p className="text-pink-700 font-bold mt-1">Rs.{p.price}.00</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>🚚 1-2 Days</span>
                    <span className="flex items-center gap-1">
                      <FiHeart className="text-pink-600" /> 12K
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

