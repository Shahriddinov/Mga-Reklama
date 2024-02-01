import { createSlice } from "@reduxjs/toolkit";
import { getPartner } from "./partner";

const initialState = {
    loading: true,
    partnerData: [],
    error: null,
};

const partnerSlice = createSlice({
    name: "partner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPartner.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.partnerData = action.payload;
            })
            .addCase(getPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default partnerSlice.reducer;
