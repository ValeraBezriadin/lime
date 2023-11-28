import React, { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";
import cartImg from "@/static/cart.svg";
import Emptycard from "@/components/Layout/Head/Cart/Emptycard";
import shopCart from "@/static/shopping-cart.svg";
import { useCart } from "@/Context";
import CartItem from "@/components/Layout/Head/Cart/CartItem";
import Subvert from "./Subvert";

const Cart = () => {
  const { cart } = useCart();
  const [cartActive, setCartActive] = useState(false);
  const [order, setOrder] = useState(false);
  const handleCart = () => {
    setCartActive(!cartActive);
  };
 
  
  const cartLength = cart.length;
  console.log("cart:",cart);
  const totalPrice = cart.reduce((sum, obj) => +obj.price * obj.count + sum, 0);
  console.log("price:",totalPrice);
  const orderHandler = () => {
    setOrder(!order);
  };
  console.log("корзина", cart);
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
            {order ? (
              <Subvert orderHandler={orderHandler}/>
            ) : (
              <>
                {" "}
                <ul className={css.cart__list}>
                  {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                  ))}
                </ul>
                <div className={css.cart__bottom}>
                  <div className={css.cart__wrapper}>
                    <span className={css.cart__meta}>Всього,грн:</span>
                    <span className={css.cart__totalsum}>{totalPrice}</span>
                  </div>
                  <button
                    className={css.cart__btn}
                    onClick={() => orderHandler()}
                  >
                    <div className={css.cart__totalcount}>
                      <Image
                        className={css.cart__img}
                        src={shopCart}
                        height={24}
                        width={24}
                      />
                      <span className={css.cart__count}>{cartLength}</span>
                    </div>{" "}
                    Підвертити замовлення
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <Emptycard />
        )}
      </div>
    </div>
  );
};

export default Cart;
