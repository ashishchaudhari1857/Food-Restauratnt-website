import react  from "react";
import {Header}from "./Components/Layout/Header";
import { Meal } from "./Components/Meal/Meal";
import Cart from "./Components/Cart/Cart";
const App=()=>{

  
  return(
    <>
    <Header></Header>
    <Cart></Cart>
   <main>
    <Meal></Meal>
   </main>
    </>
  )
}

export default App;
