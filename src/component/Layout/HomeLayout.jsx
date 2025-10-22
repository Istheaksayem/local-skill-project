import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import HeroSwiper from '../heroSwiper/heroSwiper';

const HomeLayout = () => {
    return (
        <div>

            <NavBar></NavBar>

            <HeroSwiper></HeroSwiper>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>

    );
};

export default HomeLayout;