import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-2xl  gap-5 p-4 w-full sm:w-64 md:w-72 lg:w-80 transition-transform transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.title} 
        className="h-48 w-full object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold text-green-900 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-blue-600 text-sm mt-2">{product.category}</p>
      
      <p className="text-xl font-bold text-black mt-2">${product.price}</p>
      <button 
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;