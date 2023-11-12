import { createContext, useContext, useEffect, useState } from "react";
import css from "./style.module.css";
import pasta from "@/static/product/productSugar.png";

const CartContext = createContext();

function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    } else {
      setCart([]);
    }
  }, []);
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);
  const addToCart = (item) => {
    setCart((prevCart) => {
      const double = prevCart.find((cartItem) => cartItem.id === item.id);
      if (double) {
        const updatedCart = prevCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, count: item.count + 1 };
          }
          return cartItem;
        });
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      }
      else {
        const newCart = [...prevCart, item];
        saveCartToLocalStorage(newCart);
        return newCart;
      }

      
    });
  };
  
  const removeFromCart = (i) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== i);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const increment = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
        }
      });
      return updatedCart;
    });
  };
  const decrement = (itemId) => {
    setCart((prevCart) => {
      const upDateCart = prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count - 1 };
        }
      });
      return upDateCart;
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
