import { CartContext } from "./CartContext";
import React from "react";
const Cart_Context_Provider = (props) => {
  const addItem = (item) => {};
  const removeItem = (id) => {};
  const obj = {
    items: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};
export { Cart_Context_Provider };
