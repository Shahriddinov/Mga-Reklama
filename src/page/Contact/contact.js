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

function Contact(props) {
    const dispatch = useDispatch();
    const formRef = useRef();
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
    }, [sendInfoData]);

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }
    console.log(conctactData)
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
            <div className="contact_headers">контакты</div>
            <div className="contact_headersText">Ключевые слова контакты</div>
            <div className="contact_contactRow">
                <div className="row">
                    <div className="contact_contactRow_contain">
                        {conctactData.map((item, index)=>(
                            <div key={index} className="contact_contactRow_contain_socialsCard">
                                <img className="contact_contactRow_contain_socialsCard_contactImg" src={`${baseUrlImg}/${item.icon}`} alt=""/>
                                <div className="contact_contactRow_contain_socialsCard_numberss">{item.name}</div>
                                <div className="contact_contactRow_contain_socialsCard_numb">{item.text[0]}</div>
                                <div className="contact_contactRow_contain_socialsCard_numb">{item.text[1]}</div>
                            </div>
                        ))}
                    </div>
                    <div className="contact_contactRow_contactForm">
                        <div className="contact_contactRow_contactForm_conInput">
                            <form ref={formRef}
                                  onSubmit={handleSumbit}>
                                <label className="contact_contactRow_contactForm_conInput_labels">Введите имя
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int" type="name"
                                           name="name" placeholder="Name"/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">Введите фамилию
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            family: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int"
                                           type="lastName" name="lastName" placeholder="Last Name"/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">Введите номер телефона
                                    <input onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int" type="number"
                                           name="number" placeholder="+998 90 721 88 36"/>
                                </label>
                                <label className="contact_contactRow_contactForm_conInput_labels">Описание
                                    <textarea onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            description: e.target.value,
                                        }))} className="contact_contactRow_contactForm_conInput_labels_int"
                                              placeholder="Describtion" name="decrebtion" id=""></textarea>
                                    {/*<input className="contact_contactRow_contactForm_conInput_labels_int" type="number" name="number" placeholder="+998 90 721 88 36"/>*/}
                                </label>
                                <button className="contact_contactRow_contactForm_conInput_btnSend">Отправить</button>
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