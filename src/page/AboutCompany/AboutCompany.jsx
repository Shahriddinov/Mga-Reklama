import React, {useEffect} from "react";
import "./aboutCompany.scss";
import images18 from "../../assests/images/images 18.png";
import about from "../../assests/images/about.png";
import imageOne from "../../assests/images/image 3.png"
import imageTwo from "../../assests/images/Rectangle 4.png"
import imageThere from "../../assests/images/Rectangle 5.png"
import imageFive from "../../assests/images/Rectangle 7.png"
import imageFour from "../../assests/images/office.png"
import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../reduxToolkit/About/About";
import {baseUrl, baseUrlImg} from "../../serves/api/utils";
import Spinner from "../../component/Spinner";
import Typical from "react-typical";

export default function AboutCompany() {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.aboutSlice.loading);
    const aboutData = useSelector((state) => state.aboutSlice.aboutData);


    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch,lan]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="aboutCompany">
            <img className="aboutCompany_imgMain" src={images18} alt=""/>
            {aboutData.map((item, index)=>(
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
                                        <div data-aos="flip-left"
                                             data-aos-easing="ease-out-cubic"
                                             data-aos-duration="2000" className="aboutCompany_fl_comp_ImgT_full_com">
                                            <Typical
                                                steps={[`${item.title}`, 1000, 'About our company', 500]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                        </div>
                                        <div data-aos="fade-up"
                                             data-aos-anchor-placement="center-bottom"
                                             className="aboutCompany_fl_comp_ImgT_full_direct ">

                                            {item.subtitle}
                                        </div>
                                        <div data-aos="fade-up"
                                             data-aos-anchor-placement="center-bottom" dangerouslySetInnerHTML={{
                                            __html: item.info,
                                        }} className="aboutCompany_fl_comp_ImgT_full_information">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="aboutCompany_GalleryImg">
                        <div className="row">
                            <div className="aboutCompany_GalleryImg_photoTitle">фото галерея</div>
                            <div className="aboutCompany_GalleryImg_photos">

                                <div className="aboutCompany_GalleryImg_photos_oneImg">
                                    <img className="aboutCompany_GalleryImg_photos_oneImg_build" src={imageOne} alt=""/>
                                </div>
                                <div className="aboutCompany_GalleryImg_photos_twoImg">
                                    <img className="aboutCompany_GalleryImg_photos_twoImg_redCar" src={imageTwo} alt=""/>
                                    <img className="aboutCompany_GalleryImg_photos_twoImg_redCar" src={imageThere} alt=""/>
                                </div>

                                <div className="aboutCompany_GalleryImg_photos_thereImg">
                                    <img className="aboutCompany_GalleryImg_photos_thereImg_office" src={imageFour} alt=""/>
                                    <img className="aboutCompany_GalleryImg_photos_thereImg_office" src={imageFive} alt=""/>
                                </div>


                            </div>
                        </div>

                    </div>
                </>
            ))}

            <Message/>
            <Slider/>
        </div>
    );
}
