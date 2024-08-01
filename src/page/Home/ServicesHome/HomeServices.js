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

            </div>
            <div className="services_bad">

                <div className="container">
                    <div className="services_bad_double">
                        {servicesData.map((item, index) => (
                            <motion.a
                                whileTap={{ scale: 0.8 }}
                                href="/gallery"
                                data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1500"
                                className="services_bad_double_serviceAbout"
                                key={index}
                                initial={{ opacity: 0, y: 50 }} // Initial state before scroll
                                animate={{ opacity: 1, y: 0 }} // Final state after scroll
                                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
                                viewport={{ once: true }} // Ensure animation occurs only once
                                whileHover={{ scale: 1.05 }} // Scale effect on hover
                                // whileTap={{ scale: 0.95 }} // Scale effect on tap
                                >
                                <div className="zoom"></div>
                                <img className="services_bad_double_serviceAbout_seven" src={`${baseUrlImg}/${item?.image}`} alt="" />
                                <div className="services_bad_double_serviceAbout_laser">{item?.title}</div>
                                <div>
                                    <FontAwesomeIcon className="services_bad_double_serviceAbout_plus" icon={faPlus} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeServices;