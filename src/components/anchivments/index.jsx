import React from 'react';
import css from "./style.module.css";

const Anchivments = () => {
    return (
        <>
            <ul className={css.achivments__list}>
                <li className={css.achivments__item + " " + css.achivments__first}>
                    <p className={css.achivments__text }>Качество
                    продукции  </p>
                    <p className={css.achivments__meta}>Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных</p>
                </li>
                <li className={css.achivments__item  + " " + css.achivments__second}>
                    <p className={css.achivments__text}>Легкий
                    онлайн заказ  </p>
                    <p className={css.achivments__meta}>Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных</p>
                </li>
                <li className={css.achivments__item + " " + css.achivments__third}>
                    <p className={css.achivments__text}>
                Доставка
                    до двери  </p>
                    <p className={css.achivments__meta}>Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных</p>
                </li>
                <li className={css.achivments__item + " " + css.achivments__fourth}>
                    <p className={css.achivments__text}>Выбор
                    покупателей  </p>
                    <p className={css.achivments__meta}>Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных</p>
                </li>
            </ul>
        </>
    );
};

export default Anchivments;