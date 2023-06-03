import classes from './Quality.module.css'
const  Quantity =(props)=>{
    return (
        <>
        <form>
                <label htmlFor="quantity">quantity</label>
                <input type="number" name="quantity"></input>
               <button className={classes.btn}>Add item</button>
        </form>
        </>
    )
}

export {Quantity}