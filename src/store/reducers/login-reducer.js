import { SET_LOGIN, SET_LOGOUT, GET_USER } from "../types/login.types";

const initialState = {
  isLoggedin: Boolean(localStorage.getItem("isLoggedin")),
  loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isLoggedin: true, loggedUser: action.payload };
    case SET_LOGOUT:
      return { ...state, isLoggedin: false, loggedUser: null };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
