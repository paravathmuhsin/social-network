const initialState = {
  isLoggedin: Boolean(localStorage.getItem("isLoggedin")),
  loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { isLoggedin: true, loggedUser: action.payload };
    case "SET_LOGOUT":
      return { isLoggedin: false, loggedUser: null };
    default:
      return state;
  }
};
