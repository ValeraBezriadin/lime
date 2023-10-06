import React from 'react';
import css from "./style.module.css";
import Image from "next/image";
import like from "@/static/like.svg"


const ProductCard = ({
                         title,
                         imageUrl,
                         discount,
                         stars,
                         feedback,
                         price,
                         slug,
                         favorite,
                     }) => {


    const newPrice = Math.round(price - price * (discount / 100))



    return (
        <article className={css.product}>
            <div className={css.product__head}>
                <button className={css.products__like}>
                    <Image src={like}
                           alt="like"
                           width={16}
                           height={14}
                    />

                </button>
                <Image src={imageUrl}
                       alt={slug}
                       width={60}
                       height={105}
                />
                <span className={discount ? css.products__sales : css.product__disable}>-{discount}%</span>


            </div>
            <div className={css.product__bottom}>
                <h3 className={css.product__title}>{title}</h3>
                <div className={css.product__inner}>
                    {discount
                        ?
                        <>
                            <span className={css.product__price}>{newPrice}грн.</span>
                            <span className={css.product__priceOld}>{price}грн.</span>
                        </>
                        :
                        <>
                        <span className={discount  ? css.product__price : css.product__priceTextNew }>{price}грн.</span>

                        </>

                    }

                </div>
                <button className={css.product__btn}>В корзину</button>
            </div>
        </article>
    );
};

export default ProductCard;