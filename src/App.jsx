import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import ProductDetail from './page/ProductDetail'
import AddProduct from './component/AddProduct'
import MainLayout from './component/MainLayout'
// import Footer from './component/Footer'
import Home from './page/Home'
import "./App.css"
import Product from './page/Product'

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index path= "/" element = {<Home/>}/>
          <Route path="product" element={<Product/>} />
          <Route path="product/:id" element={<ProductDetail/>} />
              <Route path='add-product' element={<AddProduct />} />
            </Route>
         
        </Routes>
      </Router>
    </>
  );
};

export default App