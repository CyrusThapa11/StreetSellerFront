import { createContext, useReducer } from "react";
import { userReduer, cartReduer, errorReduer } from "./Reducers";
import { useContext } from "react";

const AppStateContext = createContext();

const Context = ({ children }) => {
  const products = [];
  const cart = [];
  const user = null;
  let pagenumber = 0;
  let limit = 12;
  let error = false;
  let errorMessage = null;
  let loading = false;
  let sortBy = null;
  let sellername = null;
  let token = null;
  let initialState = {
    products,
    cart,
    user,
    error,
    errorMessage,
    loading,
    limit,
    pagenumber,
    sortBy,
    sellername,
    token,
  };
  const [AppState, setAppState] = useReducer(userReduer, initialState);
  // console.log();
  return (
    <AppStateContext.Provider value={{ AppState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};
export default Context;

export const GetContext = () => {
  return useContext(AppStateContext);
};
