import React, { createContext, useContext, useState } from "react";

const ApplicationContext = createContext(null);

export const useAppContext = ()=> useContext(ApplicationContext)

const AppContext = ({ children }) => {
  const [state, setState] = useState({
    appTitle: "",
  });
  const provideVal = {
    appTitle: state.appTitle,
    updateAppTitle: (title) => {
      setState({ appTitle: title });
    },
  };
  return (
    <ApplicationContext.Provider value={provideVal}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;
