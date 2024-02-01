import { createSlice } from "@reduxjs/toolkit";
import { getGallery } from "./gallery";

const initialState = {
    loading: true,
    galleryData: [],
    error: null,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGallery.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGallery.fulfilled, (state, action) => {
                state.loading = false;
                state.galleryData = action.payload;
            })
            .addCase(getGallery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default gallerySlice.reducer;
