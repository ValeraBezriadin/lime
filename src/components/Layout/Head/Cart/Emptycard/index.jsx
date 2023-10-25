import React from 'react';
import css from "./style.module.css"
import Image from "next/image";
import diet from "@/static/card/diet.svg"
import Link from "next/link";
const Emptycard = () => {

    const cardMenu = (e)=>{

    }

    return (
        <div className={css.emptycard}>
            <span className={css.emptycard__text}>
                Доброго дня
            </span>
            <div className={css.emptycard__wrapper}>
            <Image className={css.emptycard__img} src={diet} alt={"diet"} height={90} width={90}/>
            <span className={css.emptycard__subtext}>Ваш кошик пустий</span>
            <Link href={"#"} className={css.emptycard__btn}>
                Перейти в каталог
            </Link>
            <span className={css.emptycard__subtextmeta}>Выбирайте из более чем 1000 свежих товаров!</span>
            <Link href={"#"}className={css.emtycard__metatext}>Повторить прошлый заказ</Link>
            <span className={css.emptycard__span}>Вы можете быстро добавить в корзину ваши предыдущие покупки</span>
            </div>
        </div>
    );
};

export default Emptycard;