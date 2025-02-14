import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlices";
import cartReducer from "./slices/CartSlices"; 

const store = configureStore({
  reducer: {
    cart: cartSlice, 
    cart: cartReducer,
  
  },
});

export default store; 
