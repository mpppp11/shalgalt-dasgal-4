import { useEffect, useState } from "react";
import { getFavorites } from "../utils/localStorage";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
}
