import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_CATEGORY } from "../../serves/api/utils";

export const getCategory = createAsyncThunk("category/get", async () => {
    return await axios.get(GET_CATEGORY).then((res) => res.data);
});
