import Layout from "@/components/Layout";
import Head from "next/head";
import Search from "@/components/UI/Search";
import Anchivments from "@/components/anchivments";
import Slider from "src/components/Slider";
import News from "@/components/News"
import ProductCard from "src/components/ProductCard";
import Improvements from "@/components/Improvements"
import Product from "@/components/Product";
import {products} from "@/components/ProductCard/data"
import Interview from "@/components/Interview";
import ProductList from "@/components/Product/ProductList";
import RecipSlider from "@/components/Interview/RecipSlide";
import {dataSlider} from "@/components/Slider/data";
import {SwiperSlide} from "swiper/react";
import Slide from "@/components/Slider/Slide"
import Revise from "@/components/Revise";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

            </Head>
            <Layout>
                <div>

                    <Search/>

                    <Slider breakpoints={{
                        320: {
                            slidesPerView: 1,

                        },
                    }}>
                        {dataSlider.map((i)=>(
                            <SwiperSlide key={i.id}>
                                <Slide {...i}/>

                            </SwiperSlide>
                        ))}
                    </Slider>

                    <Anchivments/>

                    <News/>

                    <Product title={"Акционные товары"} href={"/"}>
                        <ProductList data={products}/>
                    </Product>



                    <Product title={"Новинки"} href={"/"}>
                        <ProductList data={products}/>
                    </Product>
                    <Revise/>
                    <Product title={"Выбор вегана"} href={"/"}>
                        <ProductList data={products}/>
                    </Product>

                    <Product title={"Популярные товары"} href={"/"}>
                        <ProductList data={products}/>
                    </Product>

                    <Interview />


                    <Improvements/>

                </div>
            </Layout>
        </>
    );
}
