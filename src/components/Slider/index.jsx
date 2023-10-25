import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import {dataSlider} from "@/components/Slider/data";
import Slide from "@/components/Slider/Slide"
import  css from "./style.module.css"
const Slider = ({children,pagination=true,breakpoints} ) => {

    return (
        <section className={css.wrapper}>
            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={breakpoints || {
                    580: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                    630: {
                        slidesPerView: 1,

                    },

                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                }}
                pagination={pagination}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >



                {children}

            </Swiper>
        </section>
    );
};

export default Slider;