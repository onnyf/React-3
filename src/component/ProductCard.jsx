import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slices/CartSlices';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      <div className='flex border h-8 w-28 mt-4 relative left-20 justify-center rounded-lg bg-gray-500 text-white hover:bg-blue-600'>
        <button onClick={()=> dispatch(addToCart(product))} className='items-center justify-between flex'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;