import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_SLIDERS } from "../../serves/api/utils";

export const getSlider = createAsyncThunk("slider/get", async () => {
    return await axios.get(GET_SLIDERS).then((res) => res.data);
});
