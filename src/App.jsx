import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <>
      <Hero id="home" />
      <Navbar />
      <Team />
    </>
  );
}

export default App;
