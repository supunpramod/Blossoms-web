import React from "react";
import Navbar from "./Components/Navbar";// <-- import your navbar
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar always on top */}
      <Navbar />

      {/* Other page content */}
      <Homepage />

      {/* Footer at the bottom */}
      
      <Footer/>

    </div>
   
  );
}

export default App;
