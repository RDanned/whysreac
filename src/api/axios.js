import axios from "axios";
import {host} from "../../config/host"

//In real project I usually do something like this
const axiosInstance = axios.create({
    baseURL: host
})

export default axiosInstance