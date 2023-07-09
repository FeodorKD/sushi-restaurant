import React, {useRef, useState} from 'react';
import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    const [validForm, setValidForm] = useState(true)

    const amountInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 15) {
            setValidForm(false)
            return;
        }

        props.onAddToCart(+inputAmount)
        setValidForm(true)
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label='кол-во' input={{
                id: props.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>Добавить</button>
            {!validForm && <p>Введите количество от 1 до 15</p>}
        </form>
    );
};

export default MealItemForm;