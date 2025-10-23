import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import HeroSwiper from '../heroSwiper/heroSwiper';
import Home from '../../Pages/Home';

const HomeLayout = () => {
    return (
        <div>

            <HeroSwiper></HeroSwiper>
         
       
                <Home></Home>

       

        </div>

    );
};

export default HomeLayout;