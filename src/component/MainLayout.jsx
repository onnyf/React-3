
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Navigation from './Navigation';
import SideBar from './Sidebar';


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
          
            <Navbar />

            <div className="flex flex-grow">
            
               <SideBar/>

           
                <div className="flex-grow p-6">
                    <Navigation />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
