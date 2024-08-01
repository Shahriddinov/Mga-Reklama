import React, { useEffect, useState } from 'react';
import "./gallery.scss";
import images18 from "../../assests/images/gallery.png";
import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import Aos from "aos";
import Spinner from "../../component/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { baseUrlImg } from "../../serves/api/utils";
import { getGallery } from "../../reduxToolkit/Gallery/gallery";
import { Modal, ModalContent } from "./ModalImg/ModalImg"; // Import custom modal components
import { t } from "i18next";

function Gallery(props) {
    const lan = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const galleryData = useSelector((state) => state.gallerySlice.galleryData);
    const loading = useSelector((state) => state.gallerySlice.loading);
    const [isOpen, setIsopen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch, lan]);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsopen(true);
    };

    const closeModal = () => {
        setIsopen(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="gallery">
                <div style={{ position: "relative" }}>
                    <img className="gallery_imgGallery" src={images18} alt="" />
                </div>
                <div className="gallery_bos">
                    <div className="container">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            {galleryData.map((item, index) => (
                                <div
                                    key={index}
                                    className="gallery_bos_GGG relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        className="gallery_bos_GGG_pho max-w-xs transition duration-300 ease-in-out hover:scale-110"
                                        src={`${baseUrlImg}/${item.photo}`}
                                        alt={item.alt || "Gallery Image"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal onOpen={closeModal}>
                    <ModalContent onClose={closeModal}>
                        <span style={{ cursor: "pointer", fontSize: "40px", color: "#f1f1f1" }} onClick={handlePrev}>&lt;</span>
                        <img
                            src={`${baseUrlImg}/${galleryData[currentIndex].photo}`}
                            alt={galleryData[currentIndex].alt || "Gallery Image"}
                            style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                        />
                        <span style={{ cursor: "pointer", fontSize: "40px", color: "#f1f1f1" }} onClick={handleNext}>&gt;</span>
                    </ModalContent>
                </Modal>
            )}
            <Message />
            <Slider />
        </>
    );
}

export default Gallery;
