import React from "react";
import { Provider } from "react-redux";
import AppContext from "./components/AppContext/AppContext";
import AppRouter from "./components/AppRouter/AppRouter";
//import store from "./store/store";
function App() {
  return (
    <Provider>
      <AppContext>
        <AppRouter />
      </AppContext>
    </Provider>
  );
}
export default App;

