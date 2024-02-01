import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./About/index";
import language from "./languageSlice";
import sliderSlice from "./Slider"
import contactSlider from "./ContactSlice/index"
import magazineSlider from "./Magazine/index"
import servicesSlider from "./Services/index"
import sendQuetion from "./SendQuetion/index"
import socialSlice from "./Social/index"
import sendInfoContact from "./SendQuetion/index"
import youTubeSlice from "./youTube/index"
import partnerSlice from "./Partner/index";
import gallerySlice from "./Gallery/index"
const store = configureStore({
    reducer: {
        language,
        aboutSlice,
        sliderSlice,
        contactSlider,
        magazineSlider,
        servicesSlider,
        sendQuetion,
        socialSlice,
        sendInfoContact,
        youTubeSlice,
        partnerSlice,
        gallerySlice


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
