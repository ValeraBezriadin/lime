import React from 'react';
import css from "./style.module.css";

const Anchivments = () => {
    return (
        <>
            <ul className={css.achivments__list}>
                <li className={css.achivments__item + " " + css.achivments__first}>
                    <p className={css.achivments__text }>Качество
                    продукции  </p>
                </li>
                <li className={css.achivments__item  + " " + css.achivments__second}>
                    <p className={css.achivments__text}>Легкий
                    онлайн заказ  </p>
                </li>
                <li className={css.achivments__item + " " + css.achivments__third}>
                    <p className={css.achivments__text}>
                Доставка
                    до двери  </p>
                </li>
                <li className={css.achivments__item + " " + css.achivments__fourth}>
                    <p className={css.achivments__text}>Выбор
                    покупателей  </p>
                </li>
            </ul>
        </>
    );
};

export default Anchivments;