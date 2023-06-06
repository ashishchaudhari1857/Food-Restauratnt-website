
import { MdShoppingCart } from "react-icons/md";
import classes from "./CartButton.module.css";
import {CartContext} from "../../Store/CartContext";
import React, { useContext, useEffect, useState } from "react";


 

const CartButton = props => {
  const ctx=useContext (CartContext);
  
    const numberOfCartItem = ctx.items.reduce(
      (currentNumber, item) => currentNumber +parseInt(item.quantity),
      0
    );
 console.log(ctx.items)
  return (
    <>
      <button className={classes.btn} onClick={props.OpenHandler} >
        <span >
          <MdShoppingCart className={ classes.icon} />
        </span>
        <span className={classes.headerline}> Your Cart </span>
        <span className={classes.bage}>{numberOfCartItem}</span>
      </button>
    </>
  );
};
export default CartButton;
