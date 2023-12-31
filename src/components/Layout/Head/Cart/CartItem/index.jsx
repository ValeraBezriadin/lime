import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import { useCart } from "@/Context";

const CartItem = ({ title, price, imageUrl, count, id, weight }) => {
  const currentPrice = price * count;
  const currentWeight = weight * count;
  const { removeFromCart, increment, decrement } = useCart();
  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <li className={css.item}>
      <Image
        className={css.item__img}
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
      />
      <div className={css.item__counter}>
        <button
          className={css.item__count}
          disabled={count >= 10}
          onClick={() => {
            increment(id);
          }}
        >
          +
        </button>
        <span className={css.item__meta}>{count}</span>
        <button
          className={css.item__count}
          disabled={count <= 1}
          onClick={() => {
            decrement(id);
          }}
        >
          -
        </button>
      </div>
      <div className={css.item__info}>
        <p className={css.item__title}>{title}</p>
        <span className={css.item__price}>{currentPrice}грн.</span>
        <span className={css.item__weight}>{currentWeight}г.</span>
      </div>
      <button className={css.item__delete} onClick={handleRemoveItem}>
        x{" "}
      </button>
    </li>
  );
};

export default CartItem;
