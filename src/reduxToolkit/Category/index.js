import { createSlice } from "@reduxjs/toolkit";
import {getCategory} from "./category";


const initialState = {
    loading: true,
    categoryData: [],
    error: null,
};

const categorySlider = createSlice({
    name: "magazine",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categoryData = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default categorySlider.reducer;
