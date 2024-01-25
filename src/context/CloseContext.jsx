import { createContext, useContext, useState } from "react";

const CloseContext = createContext();

export const CloseProvider = ({ children }) => {
  const [close, setClose] = useState("open");
  const changeCloseHandler = () => {
    setClose(close == "open" ? "close" : "open");
  };

  return (
    <CloseContext.Provider value={{ close, setClose }}>
      {children}
    </CloseContext.Provider>
  );
};

export const useClose = () => {
  return useContext(CloseContext);
};
