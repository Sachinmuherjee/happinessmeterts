import axios from "axios";

const instance = axios.create({
  baseURL: "",
});
instance.defaults.headers.common["Authorization"] = "Auth Token from";
export default instance;
