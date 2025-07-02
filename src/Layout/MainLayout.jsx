import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className=' text-black bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 '>
           
            <Navber></Navber>
            <Outlet >
               
            </Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;