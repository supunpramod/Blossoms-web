import React from "react";
import Navbar from "./Components/Navbar";// <-- import your navbar
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar always on top */}
      <Navbar />

      {/* Other page content */}
      <Homepage />
    </div>
  );
}

export default App;
