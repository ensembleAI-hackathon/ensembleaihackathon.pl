import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/styleBcg.css";
import "./styles/style.css";
import "./styles/navbar.css";
import "./styles/info.css";
import "./styles/footer.css";
import "./styles/gallery.css";
import "./styles/timeline.css";
import "./styles/languageSwitcher.css";
import "./styles/previousEditionsPicker.css";

// components
import MainContent2025 from "./components/2025/MainContent";
import Gallery2025 from "./components/2025/Gallery";
import MainContent2024 from "./components/2024/MainContent";
import Gallery2024 from "./components/2024/Gallery";
import Footer from "./components/Footer";
import Redirect from "./components/Redirect";
import NavBar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    // Firefly effect
    let bcg = document.getElementById("bcg");
    let quantity = 15;
    for (let i = 0; i < quantity; i++) {
      let fly = document.createElement("div");
      fly.className = "firefly";
      bcg.appendChild(fly);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div data-spy="scroll" data-target="nav" data-offset="60">
      <div id="bcg"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/2025" element={<MainContent2025 />} />
        <Route path="/2025/gallery" element={<Gallery2025 />} />
        <Route path="/2024" element={<MainContent2024 />} />
        <Route path="/2024/gallery" element={<Gallery2024 />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
