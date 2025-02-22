import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../index.css";
import "@fontsource/fredericka-the-great";
import "@fontsource/ewert";
import "@fontsource-variable/caveat";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import NotFound from "./pages/404.jsx";

function App() {
  return (
    <div className="h-[100vh]">
      <Header />
      <Router className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
