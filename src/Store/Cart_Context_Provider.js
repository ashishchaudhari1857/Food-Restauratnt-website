import { CartContext } from "./CartContext";
import { useReducer } from "react";
import React from "react";

const defaultstate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
//  this logic for the add to cart
// 
// 
  if (action.type === "ADD") {
    let updatedtotalAmount;
    if (action.check === "with+") {
      updatedtotalAmount = state.totalAmount + Number(action.item.price) * 1;
    } else {
      updatedtotalAmount =
        state.totalAmount + Number(action.item.price) * action.item.quantity;
    }

    const existingitemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingitemindex];

    let updatedItems;

    if (existingCartItem) {
      let cnt;
      if (action.check == "with+") {
        cnt = existingCartItem.quantity + 1;
      } else {
        cnt = existingCartItem.quantity + action.item.quantity;
      }
      const updatedItem = {
        ...existingCartItem,
        quantity: cnt,
      };
      updatedItems = [...state.items];
      updatedItems[existingitemindex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };

    // 
    //  this logic is to remove the item from card
    // 
  }
  if (action.type === "REMOVE") {
    const existingitemindex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingitemindex];
    const updatetotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingitemindex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatetotalAmount,
    };
  }
  return defaultstate;
};




// 
// 

// 
const Cart_Context_Provider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultstate);
  const addItem = (item, check) => {
    dispatchCartAction({ type: "ADD", item: item, check: check });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const obj = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};
export { Cart_Context_Provider };
