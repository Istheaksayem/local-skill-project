import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import logo from '../../assets/WhatsApp Image 2025-10-21 at 21.28.52_e3400c53.png'

const HeroSwiper = () => {
    return (
    <div className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,    
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/7dMQqsMm/follow-sheet-music-hispanic-music-teacher-talking-with-student-child-about-playing-song-acoustic-gui.jpg)' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-black/50 p-4 rounded-xl">Beginner Guitar Lessons</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/NdzDNBcG/people-learning-new-language-work.jpg)' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-black/50 p-4 rounded-xl">Spoken English Practice</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/sZt1jRC/person-using-laptop.jpg)' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-black/50 p-4 rounded-xl">Digital Marketing Basics</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default HeroSwiper;