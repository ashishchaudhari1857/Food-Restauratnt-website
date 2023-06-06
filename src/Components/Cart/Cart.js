import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import CartItem from "./Cartitem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$ ${ctx.totalAmount.toFixed(2)}`;


  const removeHadnler=(id)=>{
    ctx.removeItem(id)

  }
  const additemHandler=(item)=>{
    ctx.addItem(item ,"with+")

  };

  const cartitem = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return <CartItem 
         meal={item}
         key={item.id}
         onRemove={removeHadnler.bind(null ,item.id)} 
         onAdd={additemHandler.bind(null,item)}
        ></CartItem>;
      })}
    </ul>
  );

  console.log(ctx.dispatchCartAction)

  const has_Item = ctx.items.length > 0;

  return (
    <>
      <Modal onclose={props.CloseHandler}>
        {cartitem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span> {totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.CloseHandler}
          >
            close
          </button>
          {has_Item && <button className={classes.button}>order</button>}
        </div>
      </Modal>
    </>
  );
};
export default Cart;
