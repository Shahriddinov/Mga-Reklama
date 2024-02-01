import React, {useEffect, useState} from 'react';
import "./gallery.scss";
import images18 from "../../assests/images/12112.png"
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
import {getServices} from "../../reduxToolkit/Services/services";
import Spinner from "../../component/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {baseUrlImg} from "../../serves/api/utils";
import {getGallery} from "../../reduxToolkit/Gallery/gallery";
import ModalImage from "react-modal-image";
import { t } from "i18next";

function Gallery(props) {
    const lan = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const galleryData = useSelector((state) => state.gallerySlice.galleryData);
    const loading = useSelector((state) => state.gallerySlice.loading);
    const [isOpen, setIsopen] = useState(false);
    const showModal = () => setIsopen((prev) => !prev);

    useEffect(() => {
        Aos.init({duration: 1500});

    }, []);


    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch, lan]);

    if (loading) {
        return <Spinner/>;
    }
    return (
        <>
            <div className="gallery">
               <div style={{position:"relative"}}>
                   <img className="gallery_imgGallery" src={images18} alt=""/>
                   <div className="blur">{t("gallery")}</div>
               </div>
                <div className="gallery_bos">
                    <div className="row">
                        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                            {galleryData.map((item, index) => (

                                <div key={index} className="gallery_bos_GGG">
                                    <ModalImage
                                        style={{ width: '300px', height: '200px' }}
                                        className="gallery_bos_GGG_pho"
                                        small={`${baseUrlImg}/${item.photo}`}
                                        large={`${baseUrlImg}/${item.photo}`}
                                        alt="Hello World!"
                                    />
                                    {/*<img className="gallery_bos_GGG_pho" src={`${baseUrlImg}/${item.photo}`} alt=""/>*/}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Message/>
            <Slider/>
        </>
    );
}

export default Gallery;