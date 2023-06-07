import Input from "../UI/Input";
import classes from "./Seller.module.css";
const SellerAddfrom = (props) => {


  const SubmitHandler = (event) => {
    console.log("iam fire");
    console.log(props.asashis);
    console.log(props.Add_item);

    event.preventDefault();
    const mealData = {
      id: event.target.id.value,
      name: event.target.name.value,
      descriptiom: event.target.descriptiom.value,
      price: event.target.price.value,
    };
    props.onAddMeal(mealData);
    //  props.Add_item(obj)
    console.log(mealData);
   event.target.reset();
  };
  return (
    <form onSubmit={SubmitHandler}>
      <Input
        label={"id"}
        input={{
          id: "id",
          type: "text",
          min: "1",
          max: "2",
          step: "1",
          name: "id",
        }}
      ></Input>
      <Input
        label={"Name"}
        input={{
          id: "name",
          type: "text",
          min: "1",
          max: "7",
          step: "1",
          name: "name",
        }}
      ></Input>
      <Input
        label={"descriptiom"}
        input={{
          id: "descriptiom",
          type: "text",
          min: "1",
          max: "15",
          step: "1",
          name: "descriptiom",
        }}
      ></Input>
      <Input
        label={"price"}
        input={{
          id: "price",
          type: "number",
          min: "1",
          max: "150",
          step: "1",
          name: "price",
        }}
      ></Input>
      <div  className={classes.actions}  >
      <button   type="submit">Add New item</button>
      <button type="submit"  onClick={props.display}>close</button>
      </div>
     
    </form>
  );
};

export default SellerAddfrom;
