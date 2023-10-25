import React from 'react';
import css from "./style.module.css"
import Image from "next/image";
import {newsData} from "@/components/News/newsData";
import Link from "next/link";

const News = () => {
    const news = newsData[0]
    return (<section className={css.news}>
            <h2 className={css.news__title}>Новости лайма</h2>
            <ul className={css.news__list}>
                {newsData.map((news) => (
                    <li key={news.id} className={css.news__item}>
                        <article>
                            <Image className={css.news__img}
                                   src={news.imageUrl}
                                   alt={news.title}
                                   width={250}
                                   height={100}
                            />
                            <Link className={css.news__link} href="/">
                                <p className={css.news__itemTitle}>
                                    {news.title}
                                </p>
                                <p className={css.news__text}>{news.text}</p>
                                <span className={css.news__subTitle}>Читать дальше</span>
                            </Link>
                        </article>
                    </li>))}
            </ul>


        </section>);
};

export default News;