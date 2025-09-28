// utils/localStorage.js
export const getFavorites = () => {
  const favs = localStorage.getItem("favorites");
  return favs ? JSON.parse(favs) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const toggleFavorite = (product) => {
  let favs = getFavorites();
  const exists = favs.find((p) => p.id === product.id);
  if (exists) {
    favs = favs.filter((p) => p.id !== product.id);
  } else {
    favs.push(product);
  }
  saveFavorites(favs);
  return favs;
};
