import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
import Gallery from "./components/Gallery.jsx";
import GlobalMusic from "./components/GlobalMusic.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <GlobalMusic />

      {/* 🎮 Pixel Game Loader */}
      <AnimatePresence mode="wait">
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {(location.pathname === "/member" ||
            location.pathname === "/gallery") && <Navbar />}

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/member" element={<Member />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>

          {(location.pathname === "/member" ||
            location.pathname === "/gallery") && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
