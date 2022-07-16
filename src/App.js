import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTotop";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />}/>
      </Routes>
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
