import axios from "../utility/axios";

export const getProfile = () => axios.get("/Profile").then((res) => res.data);

