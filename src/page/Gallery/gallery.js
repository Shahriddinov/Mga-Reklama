import React, {useEffect, useState} from 'react';
import "./gallery.scss";
import images18 from "../../assests/images/gallery.png"

import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import Aos from "aos";
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
               </div>
                <div className="gallery_bos">
                    <div className="row">
                        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                            {galleryData.map((item, index) => (

                                <div key={index} className="gallery_bos_GGG relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <ModalImage
                                        style={{ width: '300px', height: '200px' }}
                                        className="gallery_bos_GGG_pho max-w-xs transition duration-300 ease-in-out hover:scale-110"
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