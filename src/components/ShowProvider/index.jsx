/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create a context
const ShowContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShowContext = () => useContext(ShowContext);

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
};
