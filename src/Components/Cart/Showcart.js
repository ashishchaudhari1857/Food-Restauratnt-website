import { useState } from "react";
import CartButton from "../Layout/CartButton";
import Cart from "./Cart";
const Showcart = () => {
  const [flag, setflag] = useState(false);

  const CloseHandler = () => {
    console.log("cdhvchj");

    setflag(false);
  };
  const OpenHandler = () => {
    console.log("cdhvchj");
    setflag(true);
  };

  return (
    <>
      <CartButton OpenHandler={OpenHandler}  CloseHandler={CloseHandler}></CartButton>
      {flag && <Cart CloseHandler={CloseHandler}></Cart>}
    </>
  );
};
export { Showcart };
