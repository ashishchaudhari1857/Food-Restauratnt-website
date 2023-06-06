 import classes from './Cartiemlist.module.css'
const  Cartitemlist=()=>{
    return(
        <>
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "shushi", amount: 2, price: 11.99 },].map((item) => {
        return(
        <li>{item.name}</li>
        );
      })}
    </ul>
    </>
    );
}

export {Cartitemlist}