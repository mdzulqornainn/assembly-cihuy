import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
import Gallery from "./components/Gallery.jsx";
import GlobalMusic from "./components/GlobalMusic.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalMusic /> {/* Music selalu hidup */}
      {/* Navbar hanya di /member */}
      {location.pathname === "/member" || location.pathname === "/gallery" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {location.pathname === "/member" || location.pathname === "/gallery" ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;

// import { motion } from "framer-motion";

// export default function Button({ href, text, icon, target }) {
//   const rel = target === "_blank" ? "noreferrer" : undefined;
//   return (
//     <motion.a
//       href={href}
//       target={target}
//       rel={rel}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className=""
//     >
//       {icon && <img src={icon} className="w-9 h-9 shrink-0 mx-1" />}
//       {text && <span>{text}</span>}
//     </motion.a>
//   );
// }
