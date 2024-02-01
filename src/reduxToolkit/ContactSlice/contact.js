import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_CONTACT } from "../../serves/api/utils";

export const getContact = createAsyncThunk("contact/get", async () => {
    return await axios.get(GET_CONTACT,{
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
