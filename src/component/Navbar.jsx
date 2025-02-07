
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { GoQuestion } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=' flex px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
        <Link to={'/'}>
        <h2 className='text-4xl'>Logo</h2>
        </Link>

        <div className=' flex gap-20'>
       
        
        <div className='flex gap-2'>
        <GoQuestion className=' text-2xl' />
          <h4>Help</h4>
          <RiArrowDropDownLine />
         
        </div>
        <div>
       <TiShoppingCart  className='h-6 w-6'/>
       </div>
       <button className=''>User</button>
        </div>
    </div>
    
  )
}

export default Navbar