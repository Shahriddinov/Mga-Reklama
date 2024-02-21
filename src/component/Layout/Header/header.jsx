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
import {baseUrlImg} from "../../../serves/api/utils";
import {getSocial} from "../../../reduxToolkit/Social/social";
import Spinner from "../../Spinner";

const Header = () => {
    // const { t } = useTranslation();

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.socialSlice.loading);

    const language = useSelector((state) => state.language.language);
    const [activeLang, setactiveLang] = useState(false);
    const [activeSidebar, setactiveSidebar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const socialData = useSelector((state) => state.socialSlice.socialData);

    const handleChangeLng = (lng) => {
        i18next.changeLanguage(lng);
        dispatch(languageChange(lng));
        setactiveLang((el) => !el);
    };
    useEffect(() => {
        dispatch(getSocial());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="h" >
            <div className="container h_header">
                <Link  to="/" className="h_header_logo">
                    <img  className="h_header_logo_title" src={Logo} alt=""/>
                </Link>
                <ul className={openMenu ? "h_header_mobile" : "h_header_navbar"}>
                    <Link to="/">
                        <li
                        
                            className="h_header_navbar_nav">{t("main")}</li>
                    </Link>
                    <Link to="/company">
                        <li

                            className="h_header_navbar_nav">{t("about")}</li>
                    </Link>
                    <Link to="/gallery">
                        <li

                            className="h_header_navbar_nav">{t("gallery")}</li>
                    </Link>
                    <Link to="/board">
                        <li   className="h_header_navbar_nav">{t("art")}</li>
                    </Link>
                    <Link to="/contact">
                        <li   className="h_header_navbar_nav">{t("contact")}</li>
                    </Link>
                    <div style={{display:"flex", justifyContent:"center", gap:"20px", alignItems:"center"}}>
                        {socialData.map((item, index)=>(
                            <div key={index} className="footer_links">
                                <li><a target="_blank" href={item.url}> <img className="footer_links_ico" src={`${baseUrlImg}/${item.icon}`} alt=""/></a></li>
                            </div>
                        ))}
                    </div>
                    <div className="h_header_navbar_language">
                        <div
                            className="h_header_navbar_language-wrapper"
                            onClick={() => setactiveLang((el) => !el)}
                        >
                            <CiGlobe className="h_header_navbar_language-icon"/>
                            <span style={{color: "white"}}>
                {languageList.find((lan) => lan.type === language)?.label}
              </span>
                            <IoMdArrowDropdown className="h_header_navbar_language-iconArrow"/>
                        </div>
                        <div className="h_header_navbar_language-bar"
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
                <img onClick={() => setOpenMenu(!openMenu)} className="h_header_burger" src={burger} alt=""/>
            </div>
        </div>
    );
};

export default Header;
