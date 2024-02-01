import { createSlice } from "@reduxjs/toolkit";
import {getServices} from "./services";


const initialState = {
    loading: true,
    servicesData: [],
    error: null,
};

const servicesSlider = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.loading = true;
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.loading = false;
                state.servicesData = action.payload;
            })
            .addCase(getServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default servicesSlider.reducer;
