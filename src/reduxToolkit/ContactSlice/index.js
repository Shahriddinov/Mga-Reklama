import { createSlice } from "@reduxjs/toolkit";
import {getContact} from "./contact";


const initialState = {
    loading: true,
    contactData: [],
    error: null,
};

const contactSlider = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContact.fulfilled, (state, action) => {
                state.loading = false;
                state.contactData = action.payload;
            })
            .addCase(getContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default contactSlider.reducer;
