import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import {dataSlider} from "@/components/Slider/data";
import Slide from "@/components/Slider/Slide"
import  css from "./style.module.css"
const Slider = ({children,pagination=true} ) => {

    return (
        <section className={css.wrapper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}

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