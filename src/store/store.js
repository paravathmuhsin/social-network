import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/login-reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: myCustomApiService
  //     }
  //   })
});
