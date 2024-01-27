import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_MAGAZINE } from "../../serves/api/utils";

export const getMagazine = createAsyncThunk("magazine/get", async () => {
    return await axios.get(GET_MAGAZINE).then((res) => res.data);
});
