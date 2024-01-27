import React from 'react';
import {Autoplay, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide, } from 'swiper/react';
import "./slider.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider1 from "../../assests/images/slider1.png"
import Slider2 from "../../assests/images/slider2.png"
import Slider3 from "../../assests/images/slider3.png"
import Slider4 from "../../assests/images/slider4.png"
import Slider5 from "../../assests/images/slider5.png"
import Slider6 from "../../assests/images/slider6.png"

function Slider(props) {
    return (
        <div className="slider">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={6}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>

                    <img className="slider_sliderImg" src={Slider1} alt=""/>
                </SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider2} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider3} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider4} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider5} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider6} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider_sliderImg" src={Slider1} alt=""/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;