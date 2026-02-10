import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
import Gallery from "./components/Gallery.jsx";
import GlobalMusic from "./components/GlobalMusic.jsx";

function App() {
  return (
    <>
      {/* 🔊 MUSIC GLOBAL */}
      <GlobalMusic />

      {/* 🔀 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
