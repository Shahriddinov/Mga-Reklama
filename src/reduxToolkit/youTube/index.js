import { createSlice } from "@reduxjs/toolkit";
import { getYou } from "./youTube";

const initialState = {
    loading: true,
    youTubeData: [],
    error: null,
};

const youTubeSlice = createSlice({
    name: "youTube",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getYou.pending, (state) => {
                state.loading = true;
            })
            .addCase(getYou.fulfilled, (state, action) => {
                state.loading = false;
                state.youTubeData = action.payload;
            })
            .addCase(getYou.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default youTubeSlice.reducer;
