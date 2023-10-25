import React from 'react';
import css from "@/components/Revise/style.module.css"
import Image from "next/image";

import { reviseData } from  "@/components/Revise/reviseData"
import Link from "next/link";


const Revise = () => {
    // const dataText = reviseData.map((i)=>{
    //     return i.title
    // });

    // console.log( dataText)
    // const textMore = "ещё";
    // const parag = document.getElementsByClassName(".revise__text");
    // const cutText = dataText.slice(0, 70) + ` ${textMore}`;
    // parag.textContent = cutText;
    // let isCut = true;
    //
    // function toggleText() {
    //     if (isCut) {
    //         parag.textContent = cutText;
    //     } else {
    //         parag.textContent = dataText;
    //     }
    //     isCut = !isCut;
    // }
    //
    // parag.addEventListener("click", toggleText);
    return (
        <section className={css.revise}>
        <div className={css.revise__inner}>
            <h2 className={css.revise__title}>
                Отзывы
                о лайме</h2>
            <button className={css.revise__btn}>Написать отзыв</button>
        </div>
            <ul className={css.revise__list}>
                {reviseData.map((i,index)=>(
                    <li key={i.id} className={css.revise__item}>
                        <div className={css.revise__wrapper}>
                        <Image className={css.revise__icon} src={i.imageUrl} alt={"ava"} width={14} height={10}/>
                        <span className={css.revise__subtitle}>{i.name}</span>
                        </div>
                        <p className={css.revise__text}>{i.title}</p>
                    </li>
                ) )}
            </ul>
            <Link  className={css.revise__link} href={'#'} > <span className={css.revise__subtext}> Смотреть все отзывы</span></Link>
        </section>
    );
};

export default Revise;