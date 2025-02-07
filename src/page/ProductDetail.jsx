import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;
     const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: product.price,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070**",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Order Now",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex-shrink-0">
        <img
          className="bg-gray-100 w-80 h-80 object-contain rounded-xl"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {product.description}
        </p>
        <p className="text-lg font-semibold text-blue-600">
          <strong>Price:</strong> ${product.price}
        </p>
        <FlutterWaveButton
          className="mt-6 bg-gray-700 rounded-xl py-2 px-4 w-36 text-white hover:bg-slate-600"
          {...fwConfig}
        />
        {/* <button className="mt-6 bg-gray-700 rounded-xl py-2 px-4 w-36 text-white hover:bg-slate-600">
          Order Now
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetail;
