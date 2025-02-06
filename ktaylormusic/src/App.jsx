import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import "./index.css";

function App() {
  return (
    <Router className="overflow-x-hidden">
      <Header />
      <div>
        <div>
          <Routes className="overflow-y-auto">
            <Route path="/" element={<Home />} />
            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
