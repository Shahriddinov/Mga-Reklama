import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_ALL_PARTNER} from "../../serves/api/utils";

export const getPartner = createAsyncThunk("partner/get", async () => {
    return await axios.get(GET_ALL_PARTNER, {
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
