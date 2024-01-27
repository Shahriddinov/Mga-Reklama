import React from "react";
import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import { Trans } from "react-i18next";
import burger from "../../../assests/images/burger.svg";
import {useDispatch, useSelector} from "react-redux";
import i18next from "i18next";
import  Logo from "../../../assests/images/Log.png"
import {CgClose} from "react-icons/cg";
import {CiGlobe} from "react-icons/ci";
import {IoMdArrowDropdown} from "react-icons/io";
import {languageChange} from "../../../reduxToolkit/languageSlice";
import {languageList} from "./data";
import { t } from "i18next";

const Header = () => {
    // const { t } = useTranslation();

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const [activeLang, setactiveLang] = useState(false);
    const [activeSidebar, setactiveSidebar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChangeLng = (lng) => {
        i18next.changeLanguage(lng);
        dispatch(languageChange(lng));
        setactiveLang((el) => !el);
    };
    return (
        <div className=" " style={{width:"100%", height:"93px", position:"fixed", zIndex:"999", display:"flex", justifyContent:"center", background:"white"}}>
            <div className="container header">
                <Link to="/" className="header_logo">
                    <img className="header_logo_title" src={Logo} alt=""/>
                </Link>
                <ul className={openMenu ? "header_mobile" : "header_navbar"}>
                    <Link to="/">
                        <li className="header_navbar_nav">{t("main")}</li>
                    </Link>
                    <Link to="/company">
                        <li className="header_navbar_nav">О компании</li>
                    </Link>
                    <Link to="/services">
                        <li className="header_navbar_nav">НАши услуги</li>
                    </Link>
                    <Link to="/contact">
                        <li className="header_navbar_nav">Контакты</li>
                    </Link>
                    <div className="header_navbar_language">
                        <div
                            className="header_navbar_language-wrapper"
                            onClick={() => setactiveLang((el) => !el)}
                        >
                            <CiGlobe className="header_navbar_language-icon"/>
                            <span style={{color: "white"}}>
                {languageList.find((lan) => lan.type === language)?.label}
              </span>
                            <IoMdArrowDropdown className="header_navbar_language-iconArrow"/>
                        </div>
                        <div className="header_navbar_language-bar"
                            style={activeLang ? {display: "flex"} : null}
                        >
                            {languageList.map((el, index) => (
                                <p
                                    key={index}
                                    onClick={() => {
                                        handleChangeLng(el.type);
                                    }}
                                >
                                    {el.label}
                                </p>
                            ))}
                        </div>
                    </div>
                </ul>
                <img onClick={() => setOpenMenu(!openMenu)} className="header_burger" src={burger} alt=""/>
            </div>
        </div>
    );
};

export default Header;
