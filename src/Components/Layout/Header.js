import React from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
const Header = () => {
  const myImage = "/food.jpg";
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeal</h1>
             <CartButton/>
        </header>
        <img src={myImage} alt="loading" className={classes.main_img}></img>
    </> 
  );
};
export { Header };
