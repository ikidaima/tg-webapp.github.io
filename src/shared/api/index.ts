import axios from "axios";

const baseURL = "http://192.168.192.232:8099";

export const api = axios.create({ baseURL });
