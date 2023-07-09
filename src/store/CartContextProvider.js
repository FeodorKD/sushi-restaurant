import React, {useReducer} from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedAmount = state.totalAmount + (action.item.price)*action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id
        })

        const existingCardItem = state.items[existingCartItemIndex]

        let updatedItem
        let updatedItems

        if(existingCardItem){
            updatedItem={
                ...existingCardItem,
                amount: existingCardItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }else {
            updatedItem = {
                ...action.item
            }
            updatedItems = state.items.concat(updatedItem)
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id
        })
        const existingCardItem = state.items[existingCartItemIndex]
        const updatedAmount = state.totalAmount - existingCardItem.price
        let updatedItems
        if(existingCardItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingCardItem , amount: existingCardItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return defaultCartState
}
const CartContextProvider = (props) => {

    const [cartState, dispathCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispathCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }

    const removeItemHandler = (id) => {
        dispathCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;