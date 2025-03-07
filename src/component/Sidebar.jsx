import { Home, Settings, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  return (
    <aside className="bg-slate-800 text-white h-auto w-80 p-5 shadow-lg mt-5 rounded-r-lg">
      <h1 className="text-xl font-bold mb-6">Side Bar</h1>
      <nav>
        <ul className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>

          <Link
            to="/product"
            className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer"
          >
            <ShoppingBag size={20} />
            <span>Products</span>
          </Link>

          <li className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </li>

          <li className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer">
            <FcSalesPerformance size={20} />
            <span>Sales</span>
          </li>

          <li className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer">
            <AiOutlineCustomerService size={20} />
            <span>Customer</span>
          </li>
        </ul>

        
        <div
          className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded cursor-pointer"
          onClick={handleLogout}
        >
          <IoIosLogOut size={20} />
          <button className="text-white font-semibold">Log Out</button>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
