import React from "react";
import css from "./style.module.css";
import Logo from "@/components/UI/Logo";

import like from "@/static/like.svg";
import cart from "@/static/cart.svg";
import percent from "@/static/percent.svg";
import registrate from "@/static/registrate.svg";
import Image from "next/image";
import {menuItem} from "@/assets/menuItem";
import Link from "next/link";
const Head = () => {
  console.log(menuItem)
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className={css.nav}>
            <button className={css.nav__menu}>
              menu
              <span className={css.nav__span}></span>
            </button>
            <button className={css.nav__sales}>
              <Image src={percent} width={25} height={25} alt="percent" />
            </button>
            <Logo />
            <button className={css.nav__registrete}>
              <Image src={registrate} width={30} height={30} alt="registret" />
            </button>
            <button className={css.nav__like}>
              <Image src={like} width={30} height={30} alt="like" />
            </button>
            <button className={css.nav__cart}>
              <Image src={cart} width={30} height={30} alt="cart" />
            </button>
            <ul className={css.nav__list}>
              <p className={css.nav__text}>Выберите категорию</p>
              {menuItem.map((i)=>(
                  <li className={css.nav__item}>
                    <Link className={css.nav__link} href={i.slug}>
                    <Image src={i.imageUrl} alt={i.name} width={25} height={25}/>
                      <span className={css.nav__name}>{i.name}</span>

                    </Link>

                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Head;