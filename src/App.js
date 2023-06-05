import react  from "react";
import {Header}from "./Components/Layout/Header";
import { Meal } from "./Components/Meal/Meal";
import {Cart_Context_Provider} from "./Store/Cart_Context_Provider";
const App=()=>{
  return(
   < Cart_Context_Provider>
    <Header></Header>
   <main>
    <Meal></Meal>
   </main>
   </Cart_Context_Provider>
  )
}

export default App;
