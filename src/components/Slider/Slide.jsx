import React from 'react';
import css from "./style.module.css"
import {dataSlider} from "@/components/Slider/data";
import Image from "next/image";

const Slide = ({title, id, color, subtitle, imageUrl, buttonText, white}) => {



    return (
        <div className={white ? css.slider + " " + css.white : css.slider}
             style={{backgroundImage: `${color}`}}>
            <div className={css.slider__inner}>
                <h2 className={css.slider__title}>{title}</h2>
                <p className={css.slider__text}>{subtitle}</p>
                <button className={css.slider__button}>{buttonText}</button>

            </div>
            <Image
                className={css.slider__img}
                src={imageUrl}
                alt={title}
                width={600}
                height={150}
            />

        </div>
    );
};

export default Slide;