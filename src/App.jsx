import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <nav className="flex gap-6 p-4 bg-blue-600 text-white shadow">
        <Link to="/" className="hover:underline">
          🏠 Home
        </Link>
        <Link to="/favorites" className="hover:underline">
          ⭐ Favorites
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
