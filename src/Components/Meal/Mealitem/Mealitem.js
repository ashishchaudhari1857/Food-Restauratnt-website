import classes from './Mealitem.module.css';
import { MealForm } from './Mealform';

const Mealitem = (props) => {
    return (
      <li className={classes.meal} >
       <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.descriptiom} >{props.meal.descriptiom}</div>
        <div className={classes.price}>{props.meal.price}</div>
       </div>
       <div>
        <MealForm/>
       </div>
       </li>

    );
  };
  
  export default Mealitem;

