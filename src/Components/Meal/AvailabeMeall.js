import { useState } from "react";
import classes from "./AvailabelMeal.module.css";
import Card from "../UI/Card";
import Mealitem from "./Mealitem/Mealitem";
import SellerAddfrom from "../Sellerpage/SellerAddform";
import SellerModal from "../Sellerpage/SellerModal";
const AvailabeMeal = () => {
  const [flag, setflag] = useState(false);
  const [MealAvailabe, setMealAvailabe] = useState([
    {
      id: "m1",
      name: "fish",
      descriptiom: "non-veg",
      price: "12",
    },
    {
      id: "m2",
      name: "paneer",
      descriptiom: "veg",
      price: "5.7",
    },

    {
      id: "m3",
      name: "chicken pulaw",
      descriptiom: "non-veg",
      price: "70",
    },
    {
      id: "m4",
      name: "coldrink",
      descriptiom: "drink",
      price: "2",
    },
  ]);
  const portal_element = document.getElementById("overlay");
  const addMeal = (newMealobj) => {
    setMealAvailabe((preMeal) => [...preMeal, newMealobj]);
  };
  const display = () => {
    setflag(!flag);
  };
  const Meallist = MealAvailabe.map((meal) => {
    return <Mealitem key={meal.id} meal={meal}></Mealitem>;
  });
  return (
    <div className={classes.container}>
      <Card>
        <ul>{Meallist}</ul>
        <button onClick={display}>Add_New_item</button>
      </Card>
      {flag && (
        <SellerModal>
          <SellerAddfrom onAddMeal={addMeal} display={display}></SellerAddfrom>
        </SellerModal>
      )}
    </div>
  );
};

export { AvailabeMeal };
