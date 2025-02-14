import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { removeFromCart } from "../redux/slices/CartSlices";

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItem);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0),
    0
  );

  const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
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
    text: "Place Order",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  const handleRemove = (id) => {
    console.log("Removing item with ID:", id); 
    dispatch(removeFromCart(id)); 
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id} 
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-lg">{item?.title || "Product Title"}</span>
              <span className="text-sm font-semibold">
                ${(item?.price || 0).toFixed(2)}
              </span>

              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <FlutterWaveButton
        className="w-40 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        {...fwConfig}
      />
    </div>
  );
};

export default CheckOut;
