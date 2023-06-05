import Modal from "../UI/Modal";
import classes from "./Cart.module.css";


const Cart = (props) => {

  const cartitem = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "shushi", amount: 2, price: 11.99 },].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <>
      <Modal>
      {cartitem}
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
