import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_SERVICES } from "../../serves/api/utils";

export const getServices = createAsyncThunk("services/get", async () => {
    return await axios.get(GET_SERVICES, {
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
