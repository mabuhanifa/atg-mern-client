import { createContext, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  return <Context.Provider value={"Hi"}>{children}</Context.Provider>;
};

export default Provider;

export const useProvider = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useProvider must be used within a Provider");
  }
  return context;
};
