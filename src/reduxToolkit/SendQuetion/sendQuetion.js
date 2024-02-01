import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { SEND_CONTACT, POST_ALL_INFO } from "../../serves/api/utils";
export const sendFullContact = createAsyncThunk(
    "sendFullContact",
    async (payload) => {
        return await axios
            .post(SEND_CONTACT, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'language': localStorage.getItem('language')
                },
            })
            .then((res) => res.data);
    }
);
export const sendInfoContact = createAsyncThunk(
    "sendPostContact",
    async (payload) => {
        return await axios
            .post(POST_ALL_INFO, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'language': localStorage.getItem('language')

                },
            })
            .then((res) => res.data);
    }
);


