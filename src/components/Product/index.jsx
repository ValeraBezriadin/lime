import React from 'react';
import css from "./style.module.css"
import Link from "next/link";
import ProductCard from "@/components/ProductCard";


const Product = ({title,href="/", children}) => {
    return (
        <section className={css.product}>
            <div className={css.product__inner}>
            <h2 className={css.product__title}>
                {title}
            </h2>
            <Link className={css.product__link} href={href}>
                Все
            </Link>
            </div>
            {children}
        </section>
    );
};

export default Product;