
import { useNavigate, useLocation } from 'react-router-dom';



const Navigation = () => {
    
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
    
  return (
    <>
      <div className='flex items-center gap-6 px-8 my-8'>
        
        <button onClick={() => {navigate(-1)}} className='h-10 w-32 bg-slate-800 text-white rounded-lg'>Go Back</button>
        
      </div>
    </>
  )
}

export default Navigation