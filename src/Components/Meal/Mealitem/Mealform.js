import classes from "./Mealform.module.css";
import Input from "../../UI/Input";
import { useContext } from "react";
import { CartContext } from "../../../Store/CartContext";
const MealForm = (props) => {
  const ctx = useContext(CartContext);
  const ADD_ITEM = (event) => {
    event.preventDefault();
    console.log(ctx);
    const obj = {
      quantity: event.target.quantity.value,
    };
    console.log(obj.quantity);
    console.log(ctx.items.id)
    if(ctx.items.id){
      console.log("csnk")
    }
    else{
         ctx.items.push({id:"c1"})
    }
  };
  return (
    <>
      <form className={classes.form} onSubmit={ADD_ITEM}>
        <Input
          label={"quantity"}
          input={{
            id: "quantity",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
            name: "quantity",
          }}
        ></Input>
        <button type="submit">Add item</button>
      </form>
    </>
  );
};

export { MealForm };
