import React, {useEffect, useRef, useState} from 'react';
import "./hero.scss"
import hero1 from "../../../../assests/images/4.jpg"
import primit from "../../../../assests/images/piramit.png"
import colo1 from "../../../../assests/images/colo1.jpg"
import colo2 from "../../../../assests/images/colo2.jpg"

import Swiper from 'swiper';
import {useDispatch, useSelector} from "react-redux";
import {getSlider} from "../../../../reduxToolkit/Slider/Slider";
import Spinner from "../../../../component/Spinner";
import {baseUrlImg} from "../../../../serves/api/utils";

const Hero = ({ sliderData, error, loading }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const swiperRef = useRef(null);
    const dispatch = useDispatch();
    // const goToNextSlide = () => {
    //     if (swiperRef.current) {
    //         if (slideIndex === 1) {
    //             setSlideIndex(sliderData.length);
    //         } else {
    //             setSlideIndex(slideIndex - 1);
    //         }
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };
    //
    // const goToPrevSlide = () => {
    //     if (slideIndex === sliderData.length) {
    //         setSlideIndex(1);
    //     } else if (slideIndex < sliderData.length) {
    //         setSlideIndex(slideIndex + 1);
    //     }
    //     if (swiperRef.current) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };
    // let slideInterval;
    //
    // const autoPlay = (sliderData) => {
    //     slideInterval = setInterval(() => {
    //         goToPrevSlide(sliderData);
    //     }, 8000);
    // };



    useEffect(() => {
        // autoPlay(sliderData);
        // return () => clearInterval(slideInterval);
        if (swiperRef.current) {

            new Swiper(swiperRef.current, {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                zoom: true,
                autoplay: {
                    delay: 5000, // Delay between transitions in milliseconds
                    disableOnInteraction: false, // Whether to disable autoplay when the user interacts with the slider
                },

            });
        }

    },[slideIndex, sliderData]);
    if (loading) {
        return <Spinner position="full" />;
    }

    if (error) {
        return <p className="">{error}</p>;
    }

    return (
        <div style={{display: "flex", justifyContent: "center", marginTop:"8%"}}>
            <div className="hero ">
                <div className="swiper-container row" ref={swiperRef}>
                    <div className="swiper-wrapper" style={{display: "flex"}}>
                        {sliderData.map((item, index) => (
                            <div
                                key={index}
                                className="swiper-slide">
                                <img
                                    className="hero_imgS"
                                    src={`${baseUrlImg}/${item.image}`}
                                    alt=""/>
                            </div>

                        ))}
                    </div>

                    {/* Swiper pagination */}
                    <div className="swiper-pagination"></div>
                    {/* Swiper navigation buttons */}
                    <div  className="swiper-button-prev hero_prev"></div>
                    <div  className="swiper-button-next hero_nextt"></div>
                    {/* Swiper scrollbar */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
