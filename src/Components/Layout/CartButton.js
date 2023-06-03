import React from "react";
import { MdShoppingCart } from "react-icons/md";
import classes from "./CartButton.module.css";
const CartButton = () => {
  return (
    <>
      <button className={classes.btn}>
        <span >
          <MdShoppingCart className={ classes.icon} />
        </span>
        <span className={classes.headerline}> Your Cart </span>
        <span className={classes.bage}>100</span>
      </button>
    </>
  );
};
export default CartButton;
