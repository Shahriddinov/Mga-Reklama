import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_SOCIAL } from "../../serves/api/utils";

export const getSocial = createAsyncThunk("social/get", async () => {
    return await axios.get(GET_SOCIAL).then((res) => res.data);
});
