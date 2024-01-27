import { createSlice } from "@reduxjs/toolkit";
import {getSlider} from "./Slider";


const initialState = {
    loading: true,
    sliderData: [],
    error: null,
};

const sliderSlice = createSlice({
    name: "sliders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSlider.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSlider.fulfilled, (state, action) => {
                state.loading = false;
                state.sliderData = action.payload;
            })
            .addCase(getSlider.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default sliderSlice.reducer;
