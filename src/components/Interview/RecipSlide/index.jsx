import React from 'react';
import css from "./style.module.css"
import Image from "next/image";
import olivs from "@/static/recip/olivs.jpg"
import sosusage from "@/static/recip/sosusage.jpg"
import bred from "@/static/recip/bred.jpg"

import {recipData} from "@/components/Interview/data";

const RecipSlide = () => {
    const {id, title, portions, time, imgUrl} = recipData[0]


    return (
        <article className={css.recipSlider}>
            <h2 className={css.recipSlider__title}>{title}</h2>
            <div className={css.recipSlider__inner}>
                <Image className={css.recipSlider__img} src={imgUrl} alt={title||"alt"} width={340} height={240}/>
                <div className={css.recipSlider__info}>
                    <span className={css.recipSlider__text + " " + css.recipSlider__text_time}>{time} минут</span>
                    <span
                        className={css.recipSlider__text + " " + css.recipSlider__text_portions}>{portions} порции</span>
                </div>

            </div>
            <div className={css.recipSlider__wrapper}>
                <ul className={css.recipSlider__list}>
                    <li className={css.recipSlider__item}>
                        <Image src={sosusage} alt={"sosusage"} width={30} height={30}/>
                    </li>
                    <li className={css.recipSlider__item}>
                        <Image src={olivs} alt={"olivs"} width={30} height={30}/>
                    </li>
                    <li className={css.recipSlider__item}>
                        <Image src={bred} alt={"bred"} width={30} height={30}/>
                    </li>

                </ul>
                <button className={css.recipSlider__btn}> Купить ингредиенты</button>
            </div>
        </article>
    );
};

export default RecipSlide;