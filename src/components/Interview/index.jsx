import React from 'react';
import css from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import play from "../../static/play.svg"
import Product from "@/components/Product";

import {SwiperSlide} from "swiper/react";
import Slide from "@/components/Slider/Slide";
import Slider from "@/components/Slider";
import {recipData} from "@/components/Interview/data";
import RecipSlide from "@/components/Interview/RecipSlide";

const Interview = () => {
    return (
        <section  className={css.recips}>
            <div className={css.interview}>

                <div className={css.interview__inner}>
                    <div className={css.interview__wrapper}>
                        <h2
                            className={css.interview__title}>
                            Интервью с
                            шеф-поваром
                        </h2>
                        <span
                            className={css.interview__text}>
                        Рассказ из первых рук
                    </span>
                    </div>
                    <Link className={css.interview__link} href="/">
                        <div className={css.interview__link_inner}>
                            <Image
                                className={css.interview__img}
                                src={play}
                                alt="play"
                                width={30}
                                height={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={css.recip__wrapper}>
                <Product title={"Рецепты от шеф-лайма!"} href={"/"}>
                    <div className={css.recip__meta}>
                    <p className={css.interview__subtitle}>Соберите все необходимые
                        продукты в один клик!</p>
                    <Slider   pagination={false} >
                        {recipData.map((i)=>(
                            <SwiperSlide key={i.id}>
                                <RecipSlide{...i}/>

                            </SwiperSlide>
                        ))}
                    </Slider>
                    </div>
                </Product>
            </div>

        </section>
    );
};

export default Interview;