import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartDrop from "./CartDrop";


const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const closeDropDown = () => {
    setDropdownOpen(false)
  }

 

  return (
    <>
      <div className="flex px-8 items-center justify-between bg-slate-800 h-24 text-white">
        <Link to={"/"}>
          <div className="h-40 w-40">
            <img src="/F_Logo.png" alt="Logo" className="flex text-2xl" />
          </div>
        </Link>

        

        <div className="flex gap-10">
          <div className="flex gap-2"></div>

          <div className="absolute flex items-center">
            <button
              onClick={() => setDropdownOpen((previous) => !previous)}
              className="absolute"
            >
              <TiShoppingCart className="h-6 w-6 mt-6 flex" />
              <div className="absolute top-2 -right-6 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-2">
                {cartCount}
              </div>
            </button>
            {dropdownOpen && <CartDrop closeDropDown={closeDropDown} />}
          </div>

          <div className="flex gap-4 ">
          <Link to={"/login"} className="flex rounded-4xl border h-10 w-20 items-center justify-center bg-blue-400 ">Logn In</Link>

           <Link to={"/sign-up"} className="flex rounded-4xl border h-10 w-20 items-center justify-center bg-blue-400 ">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;