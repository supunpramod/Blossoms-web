import { FiHeart } from "react-icons/fi";
import Girlimage from "../assets/Homepage/Girlimage.png";
import FlowerBuque from "../assets/Homepage/FlowerBuque.png";
import Newyear from "../assets/Homepage/Newyear.png";
import moretolove from "../assets/Images/Gemini_Generated_Image_f64ws8f64ws8f64w.jpg";

export default function HomePage() {
  const products = [
    { img: FlowerBuque, title: "Pink Shaded White Rose Bouquet", price: 3200 },
    { img: FlowerBuque, title: "Pink Shaded White Rose Bouquet", price: 3200 },
    { img: FlowerBuque, title: "Pink Shaded White Rose Bouquet", price: 3200 },
  ];

  return (
    <div className="w-full">

      {/* ----------------------------------------------------
          HERO SECTION
      ----------------------------------------------------- */}
      <div className="w-full bg-secondary py-12 px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 mx-auto px-10">

          {/* Left Side */}
          <div>
            <h1 className="text-5xl font-bold text-primary leading-snug">
              Where Love Blooms<br />
              Into Unforgettable<br />
              Memories.
            </h1>

            <p className="mt-4 text-2xl text-primary">
              Explore Our Curated Collection of<br />
              Fresh Blossoms and Gifts with<br />
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
      <div className="w-full bg-white py-12 px-4">
        <h2 className="text-center text-3xl font-sans font-semibold mb-8">Today Offers</h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 mx-auto px-10">

          {/* Romantic Offers */}
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">Romantic Offers</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                  <img src={p.img} alt={p.title} className="rounded-lg h-50 w-full object-cover" />
                  <h2 className="mt-3 font-semibold text-gray-800">{p.title}</h2>
                  <p className="text-primary font-bold mt-1">Rs.{p.price}.00</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span className="flex items-center gap-1">
                      <FiHeart className="text-red-500" /> 1K | 100sold
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Super Offers */}
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4 text-center">Super Offers</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                  <img src={p.img} alt={p.title} className="rounded-lg h-50 w-full object-cover" />
                  <h2 className="mt-3 font-semibold text-gray-800">{p.title}</h2>
                  <p className="text-primary font-bold mt-1">Rs.{p.price}.00</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span className="flex items-center gap-1">
                      <FiHeart className="text-red-500" /> 1K | 100sold
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ----------------------------------------------------
          NEW YEAR OFFER SECTION
      ----------------------------------------------------- */}
      <section className="w-full bg-pink-100  px-10 flex flex-col lg:flex-row items-center justify-center m-5 ">

  {/* Left Image */}
  <div className="flex justify-left mt-10 ">
  <img
    src={Newyear}
    alt="New Year Offer"
    className="
      w-[900px] 
      h-[500px] 
      object-contain
    "
  />
</div>


  {/* Right Content */}
  <div className="text-center lg:text-left max-w-xl">
    <h1 className="text-7xl font-semibold text-primary">2026</h1>
    <h2 className="text-2xl font-semibold mt-1 text-primary">New Year Offer</h2>
    <p className="mt-3 text-primary">
      Unlock the ultimate new year upgrade with our<br/> lovable products.
      Enjoy 40% off on our latest<br></br> New Arrivals.
    </p>

    <div className="flex justify-center lg:justify-start gap-4 mt-6 text-primary text-2xl">
      {["14 Days", "21 Hours", "14 Min", ].map((item, index) => (
        <div key={index} className="bg-white shadow rounded-md px-4 py-3">
          <p className="font-semibold text-4xl text-primary text-center">{item.split(" ")[0]}</p>
          <p className="text-sm text-primary text-center ">{item.split(" ")[1]}</p>
        </div>
      ))}
    </div>

    <button className="mt-6 bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-pink-700">
      Get Offer!
    </button>
  </div>
</section>


      {/* ----------------------------------------------------
          MORE TO LOVE
      ----------------------------------------------------- */}
      <section className="w-full bg-white py-12 mx-auto px-4 mt-2 ">
        <h2 className="text-3xl font-semibold text-center">More to Love</h2>
        <p className="text-center text-black mt-2">
          Let Blossoms turn your moments of love into memories that glow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-5 py-12 mx-auto px-10 m-10">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5  ">
              <div className="relative">
                <img
                  src={moretolove}
                  alt="Flower Bouquet"
                  className="w-90 h-90 object-cover rounded-2xl"  
                />
                
              </div>

              <h3 className="mt-4 font-semibold">
                25 Medium stemmed roses <br />
                <span className="text-sm text-black font-extrabold">1.2K |</span><span className="text-sm text-zinc-900"> 30 Sold</span>
              </h3>

              <p className="mt-2 text-xl font-bold text-primary ">
                Rs.6500.00{" "}
                <span className="line-through text-gray-400 text-sm">Rs.8500.00</span>
              </p>

              <p className="text-sm text-black mt-1">
                Free Delivery over Rs.1000
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
