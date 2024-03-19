import React, {useEffect} from "react";
import logo from "../../../assests/images/Log.png"
import {t} from "i18next";
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../../../reduxToolkit/Services/services";
import email from "../../../assests/images/email_outlined.svg"
import home from "../../../assests/images/home_vs_2_outlined.svg"
import phone from "../../../assests/images/call_talking.svg"
const Footer = () => {
    const lan = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.sliderSlice.error);
    const loading = useSelector((state) => state.sliderSlice.loading);
    const servicesData = useSelector((state) => state.servicesSlider.servicesData);
    useEffect(() => {
        dispatch(getServices());
    }, [dispatch,lan]);
    return (
        <div className="footer">
            <div className="row">
                <div className="footer_df">
                    <div className="footer_df_cardFooter">
                        <a href="#">
                            <img className="footer_df_cardFooter_brand" src={logo} alt="logo"/>
                        </a>
                        <div className="footer_df_cardFooter_FTitle">
                            {t("help")}
                        </div>
                    </div>
                    <div className="footer_df_cardFooter">
                        <div>Institutsional</div>
                        <ul className="footer_df_cardFooter_link">
                          <li key="1">
                            <a href="/">{t("main")}</a>
                          </li>
                          <li key="2">
                            <a href="/company">{t("about")}</a>
                          </li>
                          <li key="3">
                            <a href="/services">{t("services")}</a>
                          </li>
                          <li key="4">
                            <a href="/contact">{t("contact")}</a>
                          </li>
                        </ul>
                    </div>
                    <div className="footer_df_cardFooter">
                        <div style={{marginBottom:"40px"}}>{t("services")}</div>
                        {servicesData.map((item, id)=>(
                            <ul className="footer_df_cardFooter_Fserver">
                                <li>
                                    <a href="/gallery">{item.title}</a>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="footer_df_cardFooter">
                        <div>{t("contact")}</div>
                        <ul className="footer_df_cardFooter_link">
                            <li>
                                <img className="footer_df_cardFooter_link_FImg" src={home} alt=""/>
                                <a>{t("address")}</a>
                            </li>
                            <li>
                                <img className="footer_df_cardFooter_link_FImg" src={phone} alt=""/>
                                <a>+998770124004</a>
                            </li>
                            <li>
                                <img className="footer_df_cardFooter_link_FImg" src={email} alt=""/>
                                <a>info@mgareklama.com</a>
                            </li>

                        </ul>
                    </div>

                </div>


                <div className=" container footer_developer">
                    {/*<div>*/}
                    {/*  {" "}*/}
                    {/*  Developer: <a href="https://t.me/murod2909">@murod2909</a>*/}
                    {/*</div>*/}
                    <div>
                        Copyright © 2023 MgaReklama
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
