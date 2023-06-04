import classes from "./Mealform.module.css";
import Input from "../../UI/Input";
const MealForm = (props) => {
  return (
    <>
      <form className={classes.form}>
        <Input
          label={"quantity"}
          input={{
            id: "quantity",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button >Add item</button>
      </form>
    </>
  );
};

export { MealForm };
