import { createSlice } from "@reduxjs/toolkit";

import {sendFullContact, sendInfoContact } from "./sendQuetion";

const initialState = {
    loading: false,
    sendPostData: null,
    sendPostLoading: true,
    sendFullData: null,
    sendFullLoading: true,
    error: null,
};

const senQuetion = createSlice({
    name: "contact",
    initialState,
    reducers: {
        resetContact: (state) => {
            state.sendFullData = null;
        },
    },
    extraReducers: (build) => {


        build
            .addCase(sendFullContact.pending, (state) => {
                state.sendFullLoading = true;
            })
            .addCase(sendFullContact.fulfilled, (state, action) => {
                state.sendFullLoading = false;
                state.sendFullData = action.payload;
                console.log(action.payload);
            })
            .addCase(sendFullContact.rejected, (state, action) => {
                state.sendFullLoading = false;
                state.error = action.error.message;
            });
        build
            .addCase(sendInfoContact.pending, (state) => {
                state.sendPostLoading = true;
            })
            .addCase(sendInfoContact.fulfilled, (state, action) => {
                state.sendPLoading = false;
                state.sendPostData = action.payload;
                console.log(action.payload);
            })
            .addCase(sendInfoContact.rejected, (state, action) => {
                state.sendPostLoading = false;
                state.error = action.error.message;
            });
    },

});

export const { resetContact } = senQuetion.actions;
export default senQuetion.reducer;
