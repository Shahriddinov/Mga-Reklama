import React, {useEffect, useRef, useState, Component} from 'react';
import "./message.scss"
import {useDispatch, useSelector} from "react-redux";
import {sendFullContact} from "../../../reduxToolkit/SendQuetion/sendQuetion";
import {ToastContainer, toast} from "react-toastify";
import {resetContact} from "../../../reduxToolkit/SendQuetion";
import {t} from "i18next";
import { motion } from "framer-motion"

function Message(props) {
    const dispatch = useDispatch();
    const formRef = useRef();
    const contact = useSelector((state) => state.sendQuetion.sendFullData);

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
        question: "",
    });
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(sendFullContact(dataContact));
        formRef.current.reset();
    };
    useEffect(() => {
        if (contact) {
            toast.success(t("sendContact"), options);
        }

        dispatch(resetContact());
    }, [contact]);

    return (
        <div className="message">
            <div className="row">
                <div className="message_mains">{t("have")}</div>
                <div className="message_little">{t("all")}</div>
                <form onSubmit={handleSumbit} ref={formRef} className="message_form">
                    <input onChange={(e) =>
                        setDataContact((prev) => ({
                            ...prev,
                            question: e.target.value,
                        }))
                    }
                           required className="message_form_inputs" type="text" name="text"
                           placeholder={t("message")}/>
                    <motion.button
                        whileTap={{ scale: 0.9 }} type="submit" className="message_form_sends">{t("send")}</motion.button>
                </form>
            </div>
        </div>
    );
}

export default Message;