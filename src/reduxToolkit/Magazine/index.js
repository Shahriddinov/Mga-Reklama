import { createSlice } from "@reduxjs/toolkit";
import {getMagazine} from "./magazine";


const initialState = {
    loading: true,
    magazineData: [],
    error: null,
};

const magazineSlider = createSlice({
    name: "magazine",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMagazine.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMagazine.fulfilled, (state, action) => {
                state.loading = false;
                state.magazineData = action.payload;
            })
            .addCase(getMagazine.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default magazineSlider.reducer;
