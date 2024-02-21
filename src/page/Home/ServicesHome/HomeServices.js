import React, {useEffect, Component} from 'react';
import "./styles.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import Typical from 'react-typical';
import TextAnimation from "react-text-animations";
import {getServices} from "../../../reduxToolkit/Services/services";
import Spinner from "../../../component/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {baseUrlImg} from "../../../serves/api/utils";

import { t } from "i18next";
import {motion} from "framer-motion";


function HomeServices({servicesData, error, loading}) {
    const lan = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({duration: 1500});

    }, []);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch,lan]);


    return (
        <div className="services">
            <div className="services_iServices">
                <div  data-aos="fade-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500">

                    {t("services")}
                </div>

            </div>

            <div className="services_show">
                {/*<div className="services_show_serTit">*/}
                {/*    <div className="services_show_serTit_stavka">*/}

                {/*    </div>*/}
                {/*    <div className="services_show_serTit_patty">*/}

                {/*        Ключевые слова наши услуги</div>*/}
                {/*</div>*/}
            </div>
            <div className="services_bad">

                <div className="row">
                    <div className="services_bad_double">

                            <motion.a
                                whileTap={{ scale: 0.8 }}
                                href="/gallery" data-aos="fade-right"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="1500" className="services_bad_double_serviceAbout">
                                <div className="zoom"></div>

                                <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[0]?.image}`} alt=""/>
                                <div className="services_bad_double_serviceAbout_laser"> {servicesData[0]?.title}</div>

                                <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                                </div>
                            </motion.a>


                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="fade-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[1]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[1]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="fade-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[2]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[2]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                    </div>
                    <div className="services_bad_double" style={{ marginTop:"40px"}}>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[3]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[3]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[4]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[4]?.title}</div>
                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[5]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[5]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                    </div>
                    <div className="services_bad_double" style={{ marginTop:"40px"}}>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zodm"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[6]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[6]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                        <motion.a
                            whileTap={{ scale: 0.8 }} href="/gallery" data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[7]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[7]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                        <motion.a
                            whileTap={{ scale: 0.8 }} data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bad_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${servicesData[8]?.image}`} alt=""/>
                            <div className="services_bad_double_serviceAbout_laser"> {servicesData[8]?.title}</div>

                            <div><FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </motion.a>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default HomeServices;