import react  from "react";
import {Header}from "./Components/Layout/Header";
import { Meal } from "./Components/Meal/Meal";
const App=()=>{

  
  return(
    <>
    <Header></Header>
   <main>

    <Meal></Meal>
   </main>
    </>
  )
}

export default App;
