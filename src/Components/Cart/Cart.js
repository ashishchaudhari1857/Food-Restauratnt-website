import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { Cartitemlist } from "./Cartitemlist";


const Cart = (props) => {

  return (
    <>
      <Modal onclose={props.CloseHandler}>
        <Cartitemlist></Cartitemlist>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> 35.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.CloseHandler} >close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  </>
  );
};
export default Cart;
