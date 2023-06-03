import { useState } from "react";
import classes from "./AvailabelMeal.module.css";
import { Quantity } from "./Quantity";
const AvailabeMeal = () => {
  const Dummy = [
    {
      id: "m1",
      name: "fish",
      descriptiom: "non-veg",
      price: "$12",
    },
    {
      id: "m2",
      name: "paneer",
      descriptiom: "veg",
      price: "$5.7",
    },
    {
      id: "m3",
      name: "chicken pulaw",
      descriptiom: "non-veg",
      price: "$70",
    },
    {
      id: "m4",
      name: "coldrink",
      descriptiom: "drink",
      price: "$2",
    },
  ];
  const [MealAvailabe, setMealAvailabe] = useState(Dummy);

  const Meallist = MealAvailabe.map((meal) => {
    return (

      <ul>
        <li className={classes.name}>{meal.name}</li>
        <li className={classes.descriptiom}>{meal.descriptiom}</li>
        <li className={classes.price}>{meal.price}</li>
        <Quantity></Quantity>
        <hr></hr>
      </ul>
    );
  });
  return (
    <>
  <section className={classes.mealcoantiner}>{Meallist}</section>
 
  </>
  );
};

export { AvailabeMeal };
