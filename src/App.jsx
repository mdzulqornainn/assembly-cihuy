import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
import Gallery from "./components/Gallery.jsx";
import GlobalMusic from "./components/GlobalMusic.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalMusic /> {/* 🔊 selalu hidup */}
      {/* 🧭 Navbar hanya di /member */}
      {location.pathname === "/member" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
