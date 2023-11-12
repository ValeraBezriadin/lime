import React, { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";
import cartImg from "@/static/cart.svg";
import Emptycard from "@/components/Layout/Head/Cart/Emptycard";
import { useCart } from "@/Context";
import CartItem from "@/components/Layout/Head/Cart/CartItem";

const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const handleCart = () => {
    setCartActive(!cartActive);
  };

  const { cart } = useCart();

  console.log("корзина",cart);
  return (
    <div className={css.card}>
      <button className={css.cart__button} onClick={() => handleCart()}>
        <Image src={cartImg} width={30} height={30} alt="cart" />
        <span className={css.cart__textBtn}>Корзина</span>
      </button>
      <div
        className={
          cartActive
            ? css.cart__inner + " " + css.cart__active
            : css.cart__inner
        }
      >
        {cart.length !== 0 ? (
          <>
            <ul className={css.cart__list}>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </ul>
          </>
        ) : (
          <Emptycard />
        )}
      </div>
    </div>
  );
};

export default Cart;
