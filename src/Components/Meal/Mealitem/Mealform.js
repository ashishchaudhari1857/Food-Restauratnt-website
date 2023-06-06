import classes from "./Mealform.module.css";
import Input from "../../UI/Input";
import { useContext } from "react";
import { useRef, useState } from "react";
const MealForm = (props) => {
  const [validquantity, setvalidquantity] = useState(true);

  const quantityRef = useRef();
  const Submithandler = (event) => {
    event.preventDefault();
    const enterquantity = quantityRef.current.value;
    const enterquantityNumber = +enterquantity;
    if (
      enterquantityNumber === 0 ||
      enterquantityNumber > 5 ||
      enterquantityNumber < 1
    ) {
      setvalidquantity(false);
      return;
    }

    props.Add_to_cart(enterquantityNumber);
    quantityRef.current.value='1'
  };

  return (
    <>
      <form className={classes.form} onSubmit={Submithandler}>
        <Input
          ref={quantityRef}
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
        {!validquantity && <p>please enter the valid input</p>}
      </form>
    </>
  );
};

export { MealForm };
