import Card from "../UI/Card";
import ReactDOM from 'react-dom';
import classes from './Cart.module.css'

  const Cart =(props)=>{

    return ReactDOM.createPortal(
        <Card>
             ashish
           <div className={classes.total}>
            <span>Total Amount</span>
            <span> 35.2</span>
           </div>
           <div className={classes.actions}> 
            <button className={classes.button__alt}>close</button>
            <button className={classes.button}>order</button>
           </div>
             
        </Card>,
            document.getElementById('newroot')
    );

  
  }
export  default Cart;
