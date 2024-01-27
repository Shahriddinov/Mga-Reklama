import axios from "axios";
import { baseUrl } from "./utils";
import { getItem } from "../../helpers/persistanceStorage";

axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(function (config) {
    const language = getItem("language");
console.log(language)
    // config.headers.language = language ??  "ru";
    return config;
});

export default axios;
