import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=15");
        const response = await data.json();
        setProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className='mt-12  '>
      <h3 className="text-3xl items-center font-bold justify-center flex mb-20 ">Product</h3>
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {
        product.map((p, index) => {
          console.log(p);
          return (
            <ProductCard key={index} product={p} />
          )
        })
      }
      </div>
    </div>

  );
};

export default Product;
