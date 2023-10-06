import React from 'react';
import css from "./style.module.css"
import Link from "next/link";
const Improvements = () => {
    return (
        <section className={css.improvements}>
            <div  className={css.improvements__inner}>
                    <h4 className={css.improvements__title}>ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ</h4>
                    <span className={css.improvements__text}>Удобно ли вамсовершать покупки через наш Онлайн-Каталог?</span>
            </div>
            <ul className={css.improvements__list}>
                <li className={css.improvements__item}>
                    <Link className={css.improvements__link} href="/">
                        <span className={css.improvements__subText}>Да, легко найти товары</span>
                    </Link>
                </li>
                <li className={css.improvements__item}>
                    <Link className={css.improvements__link} href="/">
                        <span className={css.improvements__subText}>В магазине удобнее</span>
                    </Link>
                </li>
                <li className={css.improvements__item}>
                    <Link className={css.improvements__link} href="/">
                        <span className={css.improvements__subText}>Пользуюсь поиском на сайте</span>
                    </Link>
                </li>
            </ul>

        </section>
    );
};

export default Improvements;