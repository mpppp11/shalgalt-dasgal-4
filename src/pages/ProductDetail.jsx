import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-48 h-48 object-contain border rounded-lg"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg text-gray-600 mb-2">${product.price}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
        <p className="mt-2 text-sm text-gray-500 italic">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
}
