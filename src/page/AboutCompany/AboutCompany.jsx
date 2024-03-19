import React, { useEffect } from "react";
import "./aboutCompany.scss";
import images18 from "../../assests/images/3.png";

import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../reduxToolkit/About/About";
import { baseUrl, baseUrlImg } from "../../serves/api/utils";
import Spinner from "../../component/Spinner";
import { t } from "i18next";

export default function AboutCompany() {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const loading = useSelector((state) => state.aboutSlice.loading);
  const aboutData = useSelector((state) => state.aboutSlice.aboutData);

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch, lan]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="aboutCompany">
      <div style={{ position: "relative" }}>
        <img className="aboutCompany_imgMain" src={images18} alt="" />
      </div>

      {aboutData.map((item, index) => (
        <div key={index} className="aboutCompany_fl">
          <div className="row">
            <div className="aboutCompany_fl_comp">
              <div className="aboutCompany_fl_comp_ImgT">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="aboutCompany_fl_comp_ImgT_m"
                ></div>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="aboutCompany_fl_comp_ImgT_g "
                ></div>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="aboutCompany_fl_comp_ImgT_a"
                ></div>
              </div>
              <div className="aboutCompany_fl_comp_ImgT">
                <div className="aboutCompany_fl_comp_ImgT_full">
                  <div
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    className="aboutCompany_fl_comp_ImgT_full_com"
                  >
                    {item.title}
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="aboutCompany_fl_comp_ImgT_full_direct "
                  >
                    {item.subtitle}
                  </div>
                  <div className="aboutCompany_fl_comp_ImgT_full_information">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.info,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Message />
      <Slider />
    </div>
  );
}
