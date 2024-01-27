import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./About/index";
import language from "./languageSlice";
import sliderSlice from "./Slider"
import contactSlider from "./ContactSlice/index"
import magazineSlider from "./Magazine/index"
import categorySlider from "./Category/index"
import sendQuetion from "./SendQuetion/index"
import socialSlice from "./Social/index"
import sendInfoContact from "./SendQuetion/index"
const store = configureStore({
    reducer: {
        language,
        aboutSlice,
        sliderSlice,
        contactSlider,
        magazineSlider,
        categorySlider,
        sendQuetion,
        socialSlice,
        sendInfoContact



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
