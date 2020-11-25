import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44339/api",
});
//instance.defaults.headers.common["Authorization"] = "Auth Token from";
export default instance;
