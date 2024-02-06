import React, {useEffect, useRef, useState} from 'react';
import "./hero.scss"

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Spinner from "../../../../component/Spinner/Spinner";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {baseUrl, baseUrlImg} from "../../../../serves/api/utils";
import {t} from "i18next";

const Hero = ({ sliderData, error, loading }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const lan = useSelector((state) => state.language.language);
    const navigate = useNavigate();

    const handleLeft = () => {
        if (slideIndex === 1) {
            setSlideIndex(sliderData.length);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };

    const handleRight = (sliderData) => {
        if (slideIndex === sliderData.length) {
            setSlideIndex(1);
        } else if (slideIndex < sliderData.length) {
            setSlideIndex(slideIndex + 1);
        }
    };

    let slideInterval;

    const autoPlay = (sliderData) => {
        slideInterval = setInterval(() => {
            handleRight(sliderData);
        }, 8000);
    };

    useEffect(() => {
        autoPlay(sliderData);
        return () => clearInterval(slideInterval);
    }, [slideIndex, sliderData]);



    if (error) {
        return <p className="">{error}</p>;
    }
    return (
        <section className="hero">
            <div className="hero__container container def">
                <div className="hero__slider row">
                    {sliderData?.map((slider, index) => (
                        <div
                            className={`hero__slider-box ${
                                slideIndex === index + 1 ? "active" : ""
                            }`}
                            key={slider.id}
                        >
                            {slider.image ? (
                                <div
                                    className={`hero__slider-item`}
                                    style={{
                                        backgroundImage: `url(${baseUrlImg}/${slider?.image})`,
                                    }}
                                ></div>
                            ) : (
                                <div className={`hero__slider-video`}>
                                    <video autoPlay muted loop>
                                        <source
                                            src={`${baseUrlImg}/${
                                                JSON.parse(slider?.video)[
                                                JSON.parse(slider?.video).length - 1
                                                    ]?.download_link
                                            }`}
                                        />
                                    </video>
                                </div>
                            )}
                            {/*<div className="hero__slider-left-bottom">*/}
                            {/*    /!*<span>#{slider[`title_${lan}`]}</span>*!/*/}
                            {/*    /!*<h3*!/*/}
                            {/*    /!*    dangerouslySetInnerHTML={{*!/*/}
                            {/*    /!*        __html: slider[`text_${lan}`],*!/*/}
                            {/*    /!*    }}*!/*/}
                            {/*    /!*//*/}
                            {/*    <button*/}
                            {/*        onClick={() => navigate(`/sliders/${slider.id}`)}*/}
                            {/*        className={`${*/}
                            {/*            JSON.parse(slider.video).length ? "hide-btn" : ""*/}
                            {/*        }`}*/}
                            {/*    >*/}
                            {/*    </button>*/}
                            {/*    <div*/}
                            {/*        className={`navigation-line ${*/}
                            {/*            slideIndex === index + 1 ? "active" : ""*/}
                            {/*        }`}*/}
                            {/*    ></div>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </div>
                <div className="hero__bottom">
                    <div className="hero__bottom-right">
                        <div className="arrow-btn" onClick={handleLeft}>
                            <FiChevronLeft />
                        </div>
                        <div className="arrow-btn" onClick={() => handleRight(sliderData)}>
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
