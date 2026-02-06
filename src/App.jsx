import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
// import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member" element={<Member />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
    </Routes>
  );
}

export default App;
