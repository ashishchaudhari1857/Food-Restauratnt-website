
import { MdShoppingCart } from "react-icons/md";
import classes from "./CartButton.module.css";
import {CartContext} from "../../Store/CartContext";
import React, { useContext, useEffect, useState } from "react";


 

const CartButton = props => {
  const ctx=useContext (CartContext);
   const [btnbump ,sebtnbumpt]=useState(false);
  
    const numberOfCartItem = ctx.items.reduce(
      (currentNumber, item) => currentNumber +parseInt(item.quantity),
      0
    );
     
    //  object destructring 
    const {items}=ctx;
    const btnclasses=`${classes.btn} ${btnbump? classes.bump: " "}`;
   useEffect(()=>{
    if(items.length===0){
      return;
    }
    sebtnbumpt(true);
     const clean= setTimeout(()=>{
      sebtnbumpt(false);
    },300)
    
    return()=>{
      clearTimeout(clean)
    }
   },[items])
  return (

    <>
      <button className={btnclasses} onClick={props.OpenHandler} >
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
