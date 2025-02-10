
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { GoQuestion } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from 'react-redux';



const Navbar = () => {

  const cart= useSelector ((state)=>state.cart.cartCount);
  console.log(cart);

  const cartItem= useSelector ((state)=>state.cart.cartItem);
  console.log(cartItem);
  

  return (
    <div className=' flex px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
        <Link to={'/'}>
       <div className='h-40 w-40'>
       <img src="public/F_Logo.png" alt="" className='flex text-2xl'/>
       </div>
        </Link>

        <div className=' flex gap-20'>
       
        
        <div className='flex gap-2'>
        <GoQuestion className=' text-2xl' />
          <h4>Help</h4>
          <RiArrowDropDownLine />
         
        </div>
        <div className='relative flex items-center'>
          <TiShoppingCart className='h-5 w-5' />
          <div className='absolute bottom-4 -right-6 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-2'>
            {cart}
          </div>
        </div>
       <button className=''>User</button>
        </div>
    </div>
    
  )
}

export default Navbar