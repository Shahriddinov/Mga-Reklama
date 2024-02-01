import React, {useEffect} from 'react';
import {Autoplay, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide,} from 'swiper/react';
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
import {useDispatch, useSelector} from "react-redux";
import {getYou} from "../../reduxToolkit/youTube/youTube";
import Spinner from "../Spinner";
import {getPartner} from "../../reduxToolkit/Partner/partner";
import {baseUrlImg} from "../../serves/api/utils";

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

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div className="slider">

            <div className="row" style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                {
                    datas?.map((items, index) => (
                        <a href={items.url} target="_blank" key={index} className="slider_cc">
                                    <img key={index}  className="slider_cc_sliderImg"
                                         src={`${baseUrlImg}/${items.image}`}
                                         alt=""/>

                        </a>
                    ))
                }
            </div>
        </div>

    );
}

export default Slider;