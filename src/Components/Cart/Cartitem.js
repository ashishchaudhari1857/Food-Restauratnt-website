
import classes from './Cartitem.module.css'

const CartItem = (props) => {
      
  const price =Number(props.meal.price).toFixed(2);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.meal.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;