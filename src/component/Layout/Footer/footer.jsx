import React, { useEffect } from "react";
import icon from "../../../assests/images/SVG.svg";
import youtube from "../../../assests/images/youtube.svg";
import web from "../../../assests/images/web.svg";
import twettir from "../../../assests/images/twettir.svg";
import snap from "../../../assests/images/snap.svg";
import picture from "../../../assests/images/picture.svg";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner";
import { getSocial } from "../../../reduxToolkit/Social/social";
import { useDispatch, useSelector } from "react-redux";
import { getMagazine } from "../../../reduxToolkit/Magazine/magazine";
import { baseUrlImg } from "../../../serves/api/utils";
import { t } from "i18next";

const Footer = () => {
  // const dispatch = useDispatch();
  // const lan = useSelector((state) => state.language.language);
  // const loading = useSelector((state) => state.socialSlice.loading);
  // const socialData = useSelector((state) => state.socialSlice.socialData);
  //
  //
  // useEffect(() => {
  //     dispatch(getSocial());
  // }, [dispatch]);
  //
  // if (loading) {
  //     return <Spinner />;
  // }
  return (
    <div className="footer">
      <div className="row">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#">
            <div className="footer_brand">MGAREKLAMA</div>
          </a>
        </div>
        <ul className="footer_link">
          <li>
            <a href="/">{t("main")}</a>
          </li>
          <li>
            <a href="/company">{t("about")}</a>
          </li>
          <li>
            <a href="/services">{t("services")}</a>
          </li>
          <li>
            <a href="/contact">{t("contact")}</a>
          </li>
        </ul>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className=" container footer_developer">
          <div>
            {" "}
            Developer: <a href="https://t.me/murod2909">@murod2909</a>
          </div>
          <div style={{ color: "white" }}>
            Copyright © 2023 MgaReklama
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
