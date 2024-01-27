import React, {useEffect, useState} from 'react'
import Hero from './component/Hero/hero'
import Product from "./component/Product/product";
import Abouts from "./component/abouts/abouts";
import Category from "./component/Category/category";
import Message from "./Message/message";
import Slider from "../../component/Slider/slider";
import {useDispatch, useSelector} from "react-redux";
import {getSlider} from "../../reduxToolkit/Slider/Slider";
import {getAbout} from "../../reduxToolkit/About/About";
import Spinner from "../../component/Spinner";
import AboutHome from "../AboutCompany/AboutHome/aboutHome";
import HomeServices from "../Services/component/HomeServices";
export default function Home() {
    const dispatch = useDispatch();

    const sliderData = useSelector((state) => state.sliderSlice.sliderData);
    const error = useSelector((state) => state.sliderSlice.error);
    const loading = useSelector((state) => state.sliderSlice.loading);
    useEffect(() => {

        if (!sliderData?.length) {
            dispatch(getSlider());
        }

    }, [dispatch, sliderData?.length]);
    return (
    <div className='' style={{overflow:"hidden"}} >
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <AboutHome/>
      <HomeServices/>
      <Product/>
      <Abouts/>
      <Category/>
      <Message/>
      <Slider/>
    </div>
  )
}
