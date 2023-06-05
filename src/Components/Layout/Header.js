import React from "react";
import classes from "./Header.module.css";
import { Showcart } from "../Cart/Showcart";
const Header = (props) => {
  const myImage = "/food.jpg";
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeal</h1>
          <Showcart ></Showcart>
        </header>
        <img src={myImage} alt="loading" className={classes.main_img}></img>
    </> 
  );
};
export { Header };
