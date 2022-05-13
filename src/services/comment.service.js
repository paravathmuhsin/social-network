import axios from "../utility/axios";

export const getComments = () => axios.get("/comments").then((res) => res.data);

export const getComment = (id) =>
  axios.get(`/comments/${id}`).then((res) => res.data);
