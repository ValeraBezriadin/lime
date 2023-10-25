import React, {createContext, useContext, useEffect, useState} from 'react';
import css from "./style.module.css"
import  pasta from "@/static/product/productSugar.png"







const CartContext = createContext()

function saveCartToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}



export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        setCart((prevCart) => {
            const newCart = [...prevCart, item]
            saveCartToLocalStorage(newCart)
            return newCart

        })
    }
    useEffect(() => {
        const cartData = localStorage.getItem("cart")
        if (cartData){
            setCart(JSON.parse(cartData))

        }
        else{
            setCart([])
        }

    }, []);
    useEffect(() => {
        saveCartToLocalStorage(cart)
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>


    );
};


export function useCart() {
    return useContext(CartContext)
}