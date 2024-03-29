import React, {useContext} from 'react';
import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const context = useContext(CartContext)
    const addToCartHandler = (amount) => {

        context.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
        console.log(context.items)


    }
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{`$${props.price}`}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;