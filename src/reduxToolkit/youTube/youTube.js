import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_ALL_YOUTUBE} from "../../serves/api/utils";

export const getYou = createAsyncThunk("youTube/get", async () => {
    return await axios.get(GET_ALL_YOUTUBE, {
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
