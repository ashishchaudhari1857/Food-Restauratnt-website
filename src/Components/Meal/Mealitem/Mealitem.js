import classes from './Mealitem.module.css';
import { MealForm } from './Mealform';
import { useContext } from 'react';
import { CartContext } from '../../../Store/CartContext';

const Mealitem = (props) => {
  const ctx = useContext(CartContext);
  const Add_to_cart =(quantity)=>{
     ctx.addItem({
      id:props.   meal.id,
      name:props. meal.name,
      price:props.meal.price,
      descriptiom:props.meal.descriptiom,
      quantity:quantity,
     });
     console.log(ctx.items)
  }
  
    return (
      <li className={classes.meal} >
       <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.descriptiom} >{props.meal.descriptiom}</div>
        <div className={classes.price}>${props.meal.price}</div>
       </div>
       <div>
        <MealForm Add_to_cart={Add_to_cart}/>
       </div>
       </li>

    );
  };
  
  export default Mealitem;

