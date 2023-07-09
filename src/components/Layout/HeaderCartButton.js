import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const [animated, setAnimated] = useState(false)
    const context = useContext(CartContext)
    const totalItems = context.items.reduce((currentValue, item) => {
         return currentValue + item.amount
    }, 0)
    const buttonClasses = `${styles.button} ${animated ? styles.bump : ''}`

    useEffect(() => {
        if(context.items.length === 0){
            return
        }
        setAnimated(true)
        const timeout = setTimeout(() => {
            setAnimated(false)
        }, 300)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Корзина</span>
            <span className={styles.badge}>{totalItems}</span>
        </button>
    );
};

export default HeaderCartButton;