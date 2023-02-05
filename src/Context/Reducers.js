export const userReduer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("logging to console int cartReducer");
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      console.log("log ing it out");
      return { ...state, user: null };

    case "ADD_TO_CART":
      console.log("log ing it out");
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      console.log("log ing it out", action.payload._id);
      let newcart = state.cart;
      //  TODO COMPARE ID !
      newcart = newcart.filter((product) => product._id !== action.payload._id);
      console.log("newcart in reducers", newcart);
      return { ...state, cart: newcart };

    case "UPDATE_COUNT":
      console.log("log ing it out", action.payload._id);
      let newcart2 = state.cart;
      //  TODO COMPARE ID !
      newcart2 = newcart2.map((el) => {
        if (el._id !== action.payload._id) return el;
        else
          return {
            ...el,
            count: action.payload.newcount,
          };
      });
      return { ...state, cart: newcart2 };

    case "UPDATE_PAGE_NUMBER":
      console.log("state.pagenumber", state.pagenumber);
      console.log("action.payload", action.payload);
      return {
        ...state,
        pagenumber: state.pagenumber + action.payload,
      };
    case "UPDATE_LIMIT":
      console.log("state.limit", state.limit);
      console.log("action.payload", action.payload);
      return {
        ...state,
        limit: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export const cartReduer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("logging to console int cartReducer");
      return { ...state, user: action.payload };
    case "LOG_OUT":
      console.log("log ing it out");
      return;
    default:
      return state;
  }
};
export const errorReduer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("logging to console int cartReducer");
      return { ...state, user: action.payload };
    case "LOG_OUT":
      console.log("log ing it out");
      return;
    default:
      return state;
  }
};
