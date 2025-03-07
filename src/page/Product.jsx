import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filterByPrice = (price) => {
    const result = filterProduct.filter((p) => p.price > price);
    setProduct(result);
    return result;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=15");
        const response = await data.json();
        setProduct(response);
        setFilterProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const searchProduct = product.filter((p)=>p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  

  return (
    <div className="mt-12">
      <div className="relative rounded-lg border flex items-center w-80">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-l-lg text-black focus:outline-none "
        />
        <CiSearch className="absolute right-2 top-2.5 text-2xl text-gray-500 pointer-events-none" />
      </div>
      <button
        type="submit"
        className="px-4 py-2 gap-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
         relative left-84 bottom-10 focus:outline-none ml-"
      >
        Search
      </button>

      <select
        className="relative left-[900px] bottom-18 h-6 w-50 border rounded-3xl"
        onChange={(e) => {
          filterByPrice(e.target.value);
        }}
        name=""
        id=""
      >
        <option value="">...Filterproduct...</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>

      <h3 className="text-3xl items-center font-bold justify-center flex mb-20">
        Product
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {searchProduct.map((p, index) => {
          console.log(p);
          return <ProductCard key={index} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Product;
