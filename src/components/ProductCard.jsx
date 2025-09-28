import { useState, useEffect } from "react";
import { toggleFavorite, getFavorites } from "../utils/localStorage";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = getFavorites();
    setIsFav(favs.some((p) => p.id === product.id));
  }, [product.id]);

  const handleToggle = () => {
    const updated = toggleFavorite(product);
    setIsFav(updated.some((p) => p.id === product.id));
  };

  return (
    <div className="border rounded-2xl p-4 flex flex-col items-center shadow hover:shadow-lg transition bg-white">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 object-contain mb-3"
        />
        <h3 className="text-sm font-semibold text-center line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
      </Link>

      <button
        onClick={handleToggle}
        className={`mt-3 px-3 py-1 rounded-full text-sm font-medium transition ${
          isFav
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {isFav ? "⭐ Favorited" : "☆ Add Favorite"}
      </button>
    </div>
  );
}
