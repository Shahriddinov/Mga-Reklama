import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_ALL_GALLERY } from "../../serves/api/utils";

export const getGallery = createAsyncThunk("gallery/get", async () => {
    return await axios.get(GET_ALL_GALLERY, {
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
