import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlices";
import authSlice from "./slices/authSlices"
import cartReducer from "./slices/CartSlices"; 

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice, 
    cart: cartReducer,
  },
});

export default store; 
