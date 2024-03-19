import React, {useEffect, useRef} from "react";
import "../aboutCompany.scss";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../../reduxToolkit/About/About";
import Aos from "aos";
import 'aos/dist/aos.css';


export default function AboutHome() {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.aboutSlice.loading);
    const aboutData = useSelector((state) => state.aboutSlice.aboutData);



    useEffect(() => {
        Aos.init({duration: 1000});

    }, []);

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch, lan]);



    return (
        <div className="aboutCompany">
            {aboutData?.map((item, index) => (
                <>
                    <div key={index} className="aboutCompany_fl">
                        <div className="row">
                            <div className="aboutCompany_fl_comp">
                                <div className="aboutCompany_fl_comp_ImgT">
                                    <div data-aos="fade-up"
                                         data-aos-anchor-placement="top-bottom" className="aboutCompany_fl_comp_ImgT_m">

                                    </div>
                                    <div

                                        data-aos="zoom-in"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" className="aboutCompany_fl_comp_ImgT_g ">

                                    </div>
                                    <div data-aos="flip-left"
                                         data-aos-easing="ease-out-cubic"
                                         data-aos-duration="2000" className="aboutCompany_fl_comp_ImgT_a">
                                    </div>
                                </div>
                                <div className="aboutCompany_fl_comp_ImgT">
                                    <div className="aboutCompany_fl_comp_ImgT_full">
                                        <div data-aos="fade-down"
                                             data-aos-easing="ease-out-cubic"
                                             data-aos-duration="1500" className="aboutCompany_fl_comp_ImgT_full_com">
                                            {item.title}

                                        </div>
                                        <div data-aos="fade-up"
                                             data-aos-anchor-placement="center-bottom"
                                             className="aboutCompany_fl_comp_ImgT_full_direct ">

                                            {item?.subtitle}
                                        </div>
                                        <div data-aos="fade-up"
                                             data-aos-anchor-placement="center-bottom"
                                             className="aboutCompany_fl_comp_ImgT_full_information">
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.info,
                                            }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </>
            ))}


        </div>
    );
}
