import React, {useContext} from 'react';
import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
    const context = useContext(CartContext)

    const totalAmount = `$${Math.abs(context.totalAmount).toFixed(2)}`
    const hasItems = context.items.length > 0

    const removeItemCartHandler = (id) => {
        context.removeItem(id)
    }

    const addItemCartHandler = (item) => {
        context.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={styles['cart-items']}>{
        context.items.map(item => <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemCartHandler.bind(null, item)}
            onRemove={removeItemCartHandler.bind(null, item.id)}
        />)
    }</ul>

    return (
        <Modal onHideModal={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
                {hasItems && <button className={styles.button}>Заказать</button>}
            </div>
        </Modal>
    );
};

export default Cart;