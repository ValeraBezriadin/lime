import React from "react";
import css from "@/components/Product/style.module.css";
import ProductCard from "@/components/ProductCard";

const ProductList = ({ data = [] }) => {
  console.log(data);
  return (
    <>
      <ul className={css.product__list}>
        {data.map((item) => (
          <li key={item.id}>
            <ProductCard {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
