import { useState } from "react";
import classes from "./AvailabelMeal.module.css";
import Card from "../UI/Card";
import Mealitem from "./Mealitem/Mealitem";
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
    return <Mealitem key={meal.id} meal={meal}></Mealitem>;
  });
  return (
    <Card>
      <h>akjdklsandl</h>
      <ul>{Meallist}</ul>
    </Card>
  );
};



export { AvailabeMeal };
