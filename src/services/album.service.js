import axios from "../utility/axios";

export const getAlbums = () => axios.get("/albums").then((res) => res.data);

export const getAlbum = (id) =>
  axios.get(`/Albums/${id}`).then((res) => res.data);