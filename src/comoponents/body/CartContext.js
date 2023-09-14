import React, { createContext, useContext, useReducer } from 'react';

// Define your CartContext
const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // If the item already exists, create a new array with the updated quantity
                const newState = [...state];
                newState[existingItemIndex].quantity += 1;
                return newState;
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                return [...state, { ...action.payload, quantity: 1 }];
            }

        case 'REMOVE_FROM_CART':
            const itemToRemoveIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemToRemoveIndex !== -1) {
                const newState = state.filter(item => item.id !== action.payload.id);
                return newState; // Return the modified state
            }
            return state;

        default:
            return state;
    }
};


export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    // Calculate the total quantity and total amount
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    return (
        <CartContext.Provider value={{ cartItems, totalQuantity, totalAmount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
