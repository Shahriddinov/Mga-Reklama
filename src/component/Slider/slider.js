import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "./slider.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import {useDispatch, useSelector} from "react-redux";
import {getPartner} from "../../reduxToolkit/Partner/partner";
import {baseUrlImg} from "../../serves/api/utils";
import { t } from "i18next";

function Slider(props) {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.partnerSlice.loading);
    const partnerData = useSelector((state) => state.partnerSlice.partnerData);
    const datas = partnerData?.map((item) => (
        item.image

))


    useEffect(() => {
        dispatch(getPartner());
    }, [dispatch, lan]);



    return (
        <>
            <div className="slider">

                <div className="container" style={{ display: "flex", flexWrap:"wrap", justifyContent:"center", margin:"0 auto"}}>
                    <h1 style={{marginBottom:"5%"}}>{t("partner")}</h1>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={30}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                    >
                        {
                            datas?.map((items, index) => (


                        <SwiperSlide key={index} className="slider_cc">
                            <a href={items.url} target="_blank" >
                                <img  className="slider_cc_sliderImg"
                                     src={`${baseUrlImg}/${items.image}`}
                                     alt=""/>

                            </a>
                        </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>

        </>

    );
}

export default Slider;