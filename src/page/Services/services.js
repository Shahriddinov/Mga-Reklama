import React, {useEffect} from 'react';
import "./services.scss";
import images18 from "../../assests/images/images 18.png"
import Img1 from "../../assests/images/arxitektura.png"
import Img2 from "../../assests/images/cnc.png"
import Img3 from "../../assests/images/laser.png"
import Img4 from "../../assests/images/poligrafiya.png"
import Img5 from "../../assests/images/tablichka.png"
import Img6 from "../../assests/images/uv.png"
import Img7 from "../../assests/images/yollandirma.png"
import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import Typical from 'react-typical';
import TextAnimation from "react-text-animations";



function Services(props) {
    useEffect(() => {
        Aos.init({duration: 1500});

    }, []);
    return (
        <div className="services">
            <img className="services_imgServices" src={images18} alt=""/>
            <div className="services_show">
                <div className="services_show_serTit">
                    <div className="services_show_serTit_stavka">
                        <Typical
                            steps={['SERVICES', 1000, 'НАши услуги', 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                        </div>
                    <div className="services_show_serTit_patty">

                        Ключевые слова наши услуги</div>
                </div>
            </div>
            <div className="services_bag">
                <div className="row">
                    <div className="services_bag_double">
                        <div data-aos="fade-right"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img1} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="fade-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img2} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img3} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                    </div>
                    <div className="services_bag_double" style={{ marginTop:"40px"}}>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img4} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Poligrafiya</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img2} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img3} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                    </div>
                    <div className="services_bag_double" style={{ marginTop:"40px"}}>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img5} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Poligrafiya</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img6} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000" className="services_bag_double_serviceAbout">
                            <div className="zoom"></div>
                            <img className="services_bag_double_serviceAbout_seven" src={Img7} alt=""/>
                            <div className="services_bag_double_serviceAbout_laser">Arxitektura</div>

                            <div><FontAwesomeIcon className="services_bag_double_serviceAbout_plus" icon={faPlus}/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Message/>
            <Slider/>
        </div>
    );
}

export default Services;