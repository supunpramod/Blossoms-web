import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import Loginpage from "./Components/Loginpage";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // Login page hide Navbar & Footer

  return (
    <div className="w-full min-h-screen bg-white">
      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
