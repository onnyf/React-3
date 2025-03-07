import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./page/ProductDetail";
import AddProduct from "./component/AddProduct";
import MainLayout from "./component/MainLayout";
import Home from "./page/Home";
import Product from "./page/Product";
import CheckOut from "./page/CheckOut";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((data) => data.auth.token);

  return (
    <Router>
      <Routes>
        {!token ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="login" element={<Login />} />
           
          </>
        ) : (
          <>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>
            <Route path="sign-up" element= {<SignUp/>} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
