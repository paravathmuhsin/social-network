import { getPhoto } from "../../services/photos.service";
import { SET_LOGIN, SET_LOGOUT, GET_USER } from "../types/login.types";

export const setLogin = (loggedUser) => {
  return { type: SET_LOGIN, payload: loggedUser };
};
export const setLogout = () => {
  return { type: SET_LOGOUT };
};

export const getUser = () => {
  return (dispatch, getState) => {
    getPhoto(1).then((res) => {
      dispatch({ type: GET_USER, payload: res });
    });
  };
};
