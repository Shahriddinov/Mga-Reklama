import React from "react";
import "./test.scss";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Test = () => {
  return (
    <div className="test">
      <marquee className="test__text">{t("test_sayt")}</marquee>
    </div>
  );
};

export default Test;
