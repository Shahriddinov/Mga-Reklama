import React, {useEffect, useRef, useState} from 'react';
import "./contact.scss";
import images18 from "../../assests/images/images 18.png"
import call from "../../assests/images/call_talking.svg"
import email from "../../assests/images/email_outlined.svg"
import home from "../../assests/images/home_vs_2_outlined.svg"
import Slider from "../../component/Slider/slider";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../component/Spinner";
import {getContact} from "../../reduxToolkit/ContactSlice/contact";
import {baseUrlImg} from "../../serves/api/utils";
import {sendInfoContact} from "../../reduxToolkit/SendQuetion/sendQuetion";
import {t} from "i18next";
import {resetContact} from "../../reduxToolkit/SendQuetion";
import {ToastContainer, toast} from "react-toastify";
import Typical from "react-typical";

function Contact(props) {
    const dispatch = useDispatch();
    const formRef = useRef();
    const lan = useSelector((state) => state.language.language);

    const loading = useSelector((state) => state.contactSlider.loading);
    const conctactData = useSelector((state) => state.contactSlider.contactData);
    const sendInfoData = useSelector((state) => state.sendQuetion.sendInfoData);
    const options = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };
    const [dataContact, setDataContact] = useState({
        name: "",
        family: "",
        phone: "",
        description: "",
    });
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(sendInfoContact(dataContact));
        formRef.current.reset();
    };
    useEffect(() => {
        if (sendInfoData) {
            toast.success(t("Murod"), options);
        }

        dispatch(resetContact());
    }, [sendInfoData, lan]);

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch, lan]);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="contact">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <img className="contact_headImg" src={images18} alt=""/>
            <div className="contact_headers">
                {t("contact")}
            </div>
            <div className="contact_headersText"></div>
            <div className="contact_contactRow">
                <div className="row">
                    {/*<a href={`tel:${contactData.phone}`}>{contactData.phone}</a>*/}
                    {/*<a href={`mailto:${contactData.email}`}>*/}
                    {/*    {contactData.email}*/}
                    {/*</a>*/}
                        <div className="contact_contactRow_contain">
                            <div  className="contact_contactRow_contain_socialsCard">
                                <img className="contact_contactRow_contain_socialsCard_contactImg" src={call} alt=""/>
                                <div className="contact_contactRow_contain_socialsCard_numberss">Number</div>
                                <div className="contact_contactRow_contain_socialsCard_numb" >
                                    <a style={{color:"#25333b"}} href="tel:+998770124004">+998770124004</a>
                                </div>
                            </div>
                            <div  className="contact_contactRow_contain_socialsCard">
                                <img className="contact_contactRow_contain_socialsCard_contactImg" src={email} alt=""/>
                                <div className="contact_contactRow_contain_socialsCard_numberss">Email</div>
                                <div className="contact_contactRow_contain_socialsCard_numb" >
                                    <a target="_blank" style={{color:"#25333b"}} href="mailto:info@mgareklama.com">info@mgareklama.com</a>
                                </div>
                            </div>
                            <div  className="contact_contactRow_contain_socialsCard">
                                <img className="contact_contactRow_contain_socialsCard_contactImg" src={home} alt=""/>
                                <div className="contact_contactRow_contain_socialsCard_numberss">Адресс</div>
                                <div className="contact_contactRow_contain_socialsCard_numb" >
                                    <a target="_blank" style={{color:"#25333b"}} href="tel:+998770124004">Яшнабадский Район Улица Элбека дом 61 Текнопарк Д 30
                                    </a>
                                </div>
                            </div>
                        </div>

                    <div className="contact_contactRow_contactForm">
                        <div className="contact_contactRow_contactForm_conInput">
                            <form ref={formRef}
                                  onSubmit={handleSumbit}>
                                <label className="contact_contactRow_contactForm_conInput_labels">{t("writeName")}
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int" type="name"
                                           name="name" placeholder={t("name")}/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">{t("writeLastName")}
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            family: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int"
                                           type="lastName" name="lastName" placeholder={t("lastName")}/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">{t("number")}
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int" type="number"
                                           name="number" placeholder="+998 90 123 45 67"/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">{t("description")}
                                    <textarea onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            description: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int"
                                              placeholder={t("description")} name="decrebtion" id=""></textarea>
                                    {/*<input className="contact_contactRow_contactForm_conInput_labels_int" type="number" name="number" placeholder="+998 90 721 88 36"/>*/}
                                </label>
                                <button className="contact_contactRow_contactForm_conInput_btnSend">{t("send")}</button>
                            </form>
                        </div>
                        <div className="contact_contactRow_contactForm_conInput">

                            <iframe
                                title="map"
                                className="contact_contactRow_contactForm_conInput_map"
                                src="https://yandex.com/map-widget/v1/?ll=69.311797%2C41.298890&mode=search&oid=202914034599&ol=biz&z=16"
                                width="100%" height="100%" frameBorder="1" allowFullScreen="true"
                            ></iframe>

                        </div>
                    </div>
                </div>
            </div>
            <Slider/>
        </div>
    );
}

export default Contact;