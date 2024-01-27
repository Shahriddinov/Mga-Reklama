import { createSlice } from "@reduxjs/toolkit";
import { getSocial } from "./social";

const initialState = {
    loading: true,
    socialData: [],
    error: null,
};

const socialSlice = createSlice({
    name: "abouts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSocial.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSocial.fulfilled, (state, action) => {
                state.loading = false;
                state.socialData = action.payload;
            })
            .addCase(getSocial.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default socialSlice.reducer;
